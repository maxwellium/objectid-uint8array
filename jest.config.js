export default {
  coverageDirectory: 'coverage',
  collectCoverageFrom: [ 'src/*.ts' ],
  clearMocks: true,
  setupFiles: [ '<rootDir>/jest.setup.js' ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build/'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [ 151001 ]
      }
    }
  }
};