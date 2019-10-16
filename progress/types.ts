export interface PhaseWithColour {
    numerator: number
    denominator: number
    color: string
}

export interface Phase {
    numerator: number
    denominator: number
    name: string
    helpText?: string
}

export interface BarWithColour {
    value: number
    color: string
}

export interface Bar {
    value: number
    name: string
    helpText: string | undefined
}

export const phasesWithColours = [
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

export const phases = [
    {
        numerator: 0,
        denominator: 100,
        name: "Fitting model",
        helpText: "Iteration 1 of 100"
    },
    {
        numerator: 0,
        denominator: 200,
        name: "Generating uncertainty range",
        helpText: "Simulation 10 of 2000"
    },
    {
        numerator: 0,
        denominator: 1000,
        name: "Creating outputs"
    }
];