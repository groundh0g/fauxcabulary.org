module.exports = {
  // displayName: "JekyllFaces-src",
  passWithNoTests: true,

  // collectCoverage: true,
  collectCoverageFrom: [
    './docs/**/*.{js,jsx}',
    '!**/media/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/_site/**',
  ],
  coverageDirectory: "./coverage/",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};