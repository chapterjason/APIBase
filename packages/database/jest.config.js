module.exports = {
    "verbose": true,
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
    "coverageReporters": [
        "html",
        "json"
    ],
    "globals": {
        "ts-jest": {
            "tsConfig": "tsconfig.json"
        }
    },
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