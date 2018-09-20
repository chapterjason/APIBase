module.exports = {
    "rootDir": "./",
    "transform": {
        "^.+\\.(ts|tsx)?$": "ts-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/**/*.{ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
};