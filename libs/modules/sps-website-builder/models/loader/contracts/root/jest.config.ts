/* eslint-disable */
export default {
  displayName: "@sps/sps-website-builder-models-loader-contracts",
  preset: "../../../../../../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory:
    "../../../../../../../coverage/libs/modules/sps-website-builder/models/loader/contracts/root",
};
