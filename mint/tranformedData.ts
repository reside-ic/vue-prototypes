import {Dictionary} from "vuex";
import {evaluate} from "mathjs";

export interface TransformationProps {
    settings: Dictionary<string>
}

export function useTransformation(props: TransformationProps) {
    const evaluateFormula = (formula: string, row: any | null = null) => {
        const interpolatedFormula = formula.replace(/\{([^}]+)\}/g,
            (match) => {
                const id = match.replace(/\{|\}/g, "");
                let val = props.settings[id];
                if (!val && row) {
                    val = row[id]
                }
                return val
            });

        return evaluate(interpolatedFormula);
    };
    return {evaluateFormula}
}
