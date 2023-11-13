#!/bin/bash
. ./get_env.sh

PROJECT_NAME=$(get_env PROJECT_NAME)
DOMAIN=$(get_env DOMAIN)

JWT_SECRET=$(get_env JWT_SECRET)
ADMIN_JWT_SECRET=$(get_env ADMIN_JWT_SECRET)
APP_KEYS=$(get_env APP_KEYS)
API_TOKEN_SALT=$(get_env API_TOKEN_SALT)
AWS_S3_REGION=$(get_env AWS_S3_REGION)

SERVICE_NAME=$(get_env BACKEND_SERVICE_NAME)
SERVICE_SUBDOMAIN=$(get_env BACKEND_SERVICE_SUBDOMAIN)

PORTAINER_USERNAME=$(get_env PORTAINER_USERNAME)
PORTAINER_PASSWORD=$(get_env PORTAINER_PASSWORD)
PORTAINER_SERVICE_SUBDOMAIN=$(get_env PORTAINER_SERVICE_SUBDOMAIN)

DATABASE_NAME=$(get_env DATABASE_NAME)
DATABASE_USERNAME=$(get_env DATABASE_USERNAME)
DATABASE_PASSWORD=$(get_env DATABASE_PASSWORD)

DOCKER_HUB_URL=$(get_env DOCKER_HUB_URL)
DOCKER_HUB_SERVICE_REPOSITORY=$(get_env BACKEND_DOCKER_HUB_REPOSITORY_NAME)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

AVOID_DATABASE_SEEDING=$(get_env AVOID_DATABASE_SEEDING)

PORTAINER_URL=$PORTAINER_SERVICE_SUBDOMAIN.$DOMAIN

if [ -z "$SERVICE_SUBDOMAIN" ]
then
    SERVICE_A="@"
    SERVICE_URL=$DOMAIN
else
    SERVICE_A=$SERVICE_SUBDOMAIN
    SERVICE_URL=$SERVICE_SUBDOMAIN.$DOMAIN
fi

if [ -z $DOCKER_HUB_SERVICE_REPOSITORY ]
then
    echo "No docker hub repository name for service $SERVICE_NAME"
    exit 0
fi

if [ "$1" != "down" ]
then
    ./sentry.sh up $SERVICE_NAME node && \
    ./domain.sh present $SERVICE_URL $SERVICE_A && \
    ansible-playbook \
        ./backend/create_backend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME \
            JWT_SECRET=$JWT_SECRET \
            ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET \
            APP_KEYS=$APP_KEYS \
            API_TOKEN_SALT=$API_TOKEN_SALT \
            DATABASE_NAME=$DATABASE_NAME \
            DATABASE_USERNAME=$DATABASE_USERNAME \
            DATABASE_PASSWORD=$DATABASE_PASSWORD \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME \
            DOMAIN=$DOMAIN \
            PORTAINER_USERNAME=$PORTAINER_USERNAME \
            PORTAINER_PASSWORD=$PORTAINER_PASSWORD \
            PORTAINER_URL=$PORTAINER_URL \
            DOCKER_HUB_URL=$DOCKER_HUB_URL \
            DOCKER_HUB_SERVICE_REPOSITORY=$DOCKER_HUB_SERVICE_REPOSITORY \
            SERVICE_URL=$SERVICE_URL \
            AVOID_DATABASE_SEEDING=$AVOID_DATABASE_SEEDING" && \
    ansible-playbook \
        ./backend/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY \
            SERVICE_URL=$SERVICE_URL \
            PORTAINER_URL=$PORTAINER_URL"
else
    ansible-playbook \
        ./backend/clear_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY" && \
    ansible-playbook \
        ./backend/delete_backend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME" && \
    ./domain.sh down $SERVICE_URL $SERVICE_A &&
    ./sentry.sh down $SERVICE_NAME
fi