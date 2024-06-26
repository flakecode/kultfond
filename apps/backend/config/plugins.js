module.exports = ({ env }) => {
  const config = {
    ["users-permissions"]: {
      config: {
        appName: env("APP_NAME", "Single Page Startup"),
        registerByEmailCode: false,
        authFactors: {
          factors: [
            { handler: "auth.callback" },
            // If all are required, but will be on one page
            // {
            //     handler: ['auth.phoneConfirmation', 'auth.emailConfirmation'],
            //     type: 'parallel',
            // },
            // If one is to be chosen in priority order
            // {
            //     handler: ['auth.emailConfirmation', 'auth.phoneConfirmation'],
            //     type: 'one',
            // },
            { handler: "user.checkOtp" },
          ],
        },
      },
    },
    "sps-billing": {
      enabled: true,
      resolve: "./src/plugins/sps-billing",
      config: {
        JWT_SECRET: env("JWT_SECRET"),
        STRIPE_API_KEY: env("STRIPE_API_KEY"),
        BACKEND_URL: env("BACKEND_URL"),
        FRONTEND_URL: env("FRONTEND_URL"),
        ZERO_X_PROCESSING_SHOP_ID: env("ZERO_X_PROCESSING_SHOP_ID"),
        ZERO_X_PROCESSING_TEST_PAYMENTS: env("ZERO_X_PROCESSING_TEST_PAYMENTS"),
      },
    },
    "sps-subscription": {
      enabled: true,
      resolve: "./src/plugins/sps-subscription",
      config: {
        JWT_SECRET: env("JWT_SECRET"),
        BACKEND_URL: env("BACKEND_URL"),
        FRONTEND_URL: env("FRONTEND_URL"),
      },
    },
    "sps-ecommerce": {
      enabled: true,
      resolve: "./src/plugins/sps-ecommerce",
    },
    "sps-migrate": {
      enabled: true,
      resolve: "./src/plugins/sps-migrate",
    },
    "sps-crm": {
      enabled: true,
      resolve: "./src/plugins/sps-crm",
    },
    "sps-notification": {
      enabled: true,
      resolve: "./src/plugins/sps-notification",
    },
    "sps-website-builder": {
      enabled: true,
      resolve: "./src/plugins/sps-website-builder",
    },
  };

  const emailProvider = env("EMAIL_PROVIDER");

  if (emailProvider) {
    config.email = {
      config: {
        ...emailProviders[emailProvider](env),
        appName: env("PROJECT_NAME", "Single Page Startup"),
      },
    };
  }

  if (env("AWS_S3_ACCESS_KEY")) {
    config.upload = {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            accessKeyId: env("AWS_S3_ACCESS_KEY"),
            secretAccessKey: env("AWS_S3_SECRET_ACCESS_KEY"),
            region: env("AWS_S3_REGION", "eu-central-1"),
            params: {
              Bucket: env("AWS_S3_BUCKET"),
            },
          },
        },
      },
    };
  }

  if (env("SENTRY_DSN")) {
    config.sentry = {
      enabled: true,
      config: {
        dsn: env("SENTRY_DSN"),
        sendMetadata: true,
      },
    };
  }

  if (env("PROSTOR_SMS_LOGIN")) {
    config["users-permissions"] = {
      ...config["users-permissions"],
      config: {
        ...config["users-permissions"].config,
        sms: {
          login: env("PROSTOR_SMS_LOGIN"),
          password: env("PROSTOR_SMS_PASSWORD"),
        },
      },
    };
  }

  return config;
};

const emailProviders = {
  "amazon-ses": (env) => ({
    provider: "amazon-ses",
    providerOptions: {
      key: env("AWS_SES_ACCESS_KEY"),
      secret: env("AWS_SES_SECRET_ACCESS_KEY"),
      amazon: env("AWS_SES_URL"),
    },
    settings: {
      defaultFrom: env("AWS_SES_DEFAULT_FROM"),
      defaultReplyTo: env("AWS_SES_DEFAULT_REPLY_TO"),
    },
  }),
  mailtrap: (env) => ({
    provider: "mailtrap",
    providerOptions: {
      user: env("MAILTRAP_USER", "c94cc3fc1db67b"),
      password: env("MAILTRAP_PASSWORD", "7e018be73f6404"),
    },
    settings: {
      defaultFrom: env(
        "MAILTRAP_DEFAULT_FROM",
        "no-reply@singlepagestartup.com",
      ),
      defaultReplyTo: env(
        "MAILTRAP_DEFAULT_REPLY_TO",
        "contact@singlepagestartup.com",
      ),
    },
  }),
  sendpulse: (env) => ({
    provider: "sendpulse",
    providerOptions: {
      user: env("SENDPULSE_USER_ID"),
      secret: env("SENDPULSE_USER_SECRET"),
    },
    settings: {
      defaultFrom: {
        name: env("SENDPULSE_DEFAULT_FROM_NAME", "SinglePageStartup"),
        email: env("SENDPULSE_DEFAULT_FROM", "no-reply@singlepagestartup.com"),
      },
      defaultReplyTo: env(
        "SENDPULSE_DEFAULT_REPLY_TO",
        "contact@singlepagestartup.com",
      ),
    },
  }),
  sendgrid: (env) => ({
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: env(
        "SENDGRID_DEFAULT_FROM",
        "no-reply@mail.singlepagestartup.com",
      ),
      defaultReplyTo: env(
        "SENDGRID_DEFAULT_REPLY_TO",
        "contact@mail.singlepagestartup.com",
      ),
    },
  }),
};
