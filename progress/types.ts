export interface ProgressPhase {
    started: boolean
    complete: boolean
    value?: number
    name: string
    helpText?: string
}

export const phases: ProgressPhase[] = [
    {
        started: true,
        complete: false,
        value: 0,
        name: "Fitting model",
        helpText: "Iteration 1 of 100"
    },
    {
        started: false,
        complete: false,
        value: 0,
        name: "Generating uncertainty range",
        helpText: "Simulation 10 of 2000"
    },
    {
        started: false,
        complete: false,
        name: "Creating outputs"
    }
];