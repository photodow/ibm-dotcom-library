module.exports = {
  collectCoverageFrom: [
    'packages/**/src/**/*.js',
    '!packages/{bundler,cli,components,sketch}/**',
    '!packages/**/{examples,stories}/**',
    '!**/*-story.js',
  ],
  moduleFileExtensions: ['js', 'json'],
  reporters: ['default', 'jest-junit'],
  setupFiles: ['./tasks/jest/setup.js'],
  setupFilesAfterEnv: ['./tasks/jest/setupafter.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.js?(x)',
    '<rootDir>/**/?(*.)(spec|test).js?(x)',
    '<rootDir>/**/?(*-)(spec|test).js?(x)',
  ],
  transform: {
    '^.+\\.(js|jsx)$': './tasks/jest/jsTransform.js',
    '^.+\\.css$': './tasks/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': './tasks/jest/fileTransform.js',
  },
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: [
    '/cjs/',
    '/dist/',
    '/es/',
    '/lib/',
    'e2e',
    'examples',
    '/umd/',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  watchPathIgnorePatterns: [
    '/cjs/',
    '/dist/',
    '/es/',
    '/examples/',
    '/lib/',
    '/storybook/',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  testURL: 'http://localhost',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
