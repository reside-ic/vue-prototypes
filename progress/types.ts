export interface Phase {
    value: number
    name: string
    helpText?: string
}

export const phases: Phase[] = [
    {
        value: 0,
        name: "Fitting model",
        helpText: "Iteration 1 of 100"
    },
    {
        value: 0,
        name: "Generating uncertainty range",
        helpText: "Simulation 10 of 2000"
    },
    {
        value: 0,
        name: "Creating outputs"
    }
];