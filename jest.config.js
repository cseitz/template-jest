
/** @type {import('jest').Config} */
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest', {
                tsconfig: 'test/tsconfig.json',
                useESM: true,
            }
        ]
    },
    moduleNameMapper: {
        "~/(.*)": "<rootDir>/src/$1"
    },
    extensionsToTreatAsEsm: ['.ts']
}
