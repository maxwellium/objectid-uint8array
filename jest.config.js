// https://jestjs.io/docs/en/configuration.html
module.exports = {
  clearMocks: true,
  setupFiles: [ "<rootDir>/jest.setup.js" ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/test/"
  ]
};
