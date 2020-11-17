import {Dictionary} from "vuex";
import {evaluate} from "mathjs";

export interface TransformationProps {
    settings: Dictionary<string>
}

export function useTransformation(props: TransformationProps) {
    const evaluateFormula = (formula: string) => {
        const interpolatedFormula = formula.replace(/\{([^}]+)\}/g,
            (match) => props.settings[match.replace(/\{|\}/g, "")]);
        return evaluate(interpolatedFormula);
    };
    return {evaluateFormula}
}
