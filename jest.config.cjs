module.exports = {
  preset: '@react-native/jest-preset',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transformIgnorePatterns: [],
};
