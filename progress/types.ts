export interface Phase {
    numerator: number
    denominator: number
    color: string
}

export interface Bar {
    value: number
    color: string
}

export const phases = [
    {
        numerator: 0,
        denominator: 100,
        color: "#2bb58e"
    },
    {
        numerator: 0,
        denominator: 200,
        color: "#ded410"
    },
    {
        numerator: 0,
        denominator: 1000,
        color: "#b02bb5"
    }
];