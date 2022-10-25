
"jest"; {
  "setupFilesAfterEnv"; [
    "<rootDir>/setupTests.js"
  ]
}

module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleNameMapper: {
    "\\.(css)$":  "<rootDir>/__mocks__/styleMock.js",
    },
  };