
export default {
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest', {
                tsconfig: './test/tsconfig.json',
                useESM: true,
            }
        ]
    },
    extensionsToTreatAsEsm: ['.ts']
}