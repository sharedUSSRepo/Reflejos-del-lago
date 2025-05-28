// jest.config.js
module.exports = {
  // tell Jest how to process different file types
  transform: {
    // process `*.vue` files with vue3-jest
    '^.+\\.vue$': '@vue/vue3-jest',
    // process js files with babel
    '^.+\\.jsx?$': 'babel-jest'
  },
  // so you can import without specifying extensions
  moduleFileExtensions: ['js', 'json', 'vue'],
  // if you use `@/` alias in imports, map it to `<rootDir>/src/`
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // stub out static assets (images, css, etc.)
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  // ignore transforming most of node_modules
  transformIgnorePatterns: ['/node_modules/']
}
