import {computed} from "@vue/composition-api";
import {LongFormatSeriesMetadata, SeriesDefinition, SeriesMetadata, WideFormatSeriesMetadata} from "./fakeAPIData";
import {FilteringProps, useFiltering} from "./filteredData";
import {Dictionary} from "vuex";
import {useTransformation} from "./tranformedData";

interface Props extends FilteringProps {
    series: SeriesDefinition[]
    metadata: SeriesMetadata
}

export function useLongFormatData(props: Props) {
    let settings = props.settings;
    if (props.metadata.settings) {
        // filter to those settings specified in the metadata
        settings = props.metadata.settings
            .reduce((acc: Dictionary<string>, value: string) => {
                acc[value] = props.settings[value];
                return acc
            }, {} as Dictionary<string>)
    }

    const {filteredData} = useFiltering({...props, settings});
    const {evaluateFormula} = useTransformation(props);
    const getRows = (definition: SeriesDefinition) => {
        const x = [] as any[];
        let y = [] as any[];
        const meta = props.metadata as LongFormatSeriesMetadata
        filteredData.value.map((row: any) => {
            if (row[meta.id_col] == definition.id) {
                x.push(row[meta.x_col]);
                if (meta.y_col) {
                    y.push(row[meta.y_col])
                }
            }
        });
        if (definition.y_formula){
            y = definition.y_formula.map(evaluateFormula);
        }
        return [x, y]
    }

    const dataSeries = computed(() => {
        return props.series.map((d: SeriesDefinition) => {
            if (d.x && d.y) {
                // all values are given explicitly
                return d
            }
            if (d.id) {
                const rows = getRows(d);
                return {
                    ...d,
                    x: rows[0],
                    y: rows[1]
                }
            }

            // ignore invalid definitions
            return null
        });
    });

    return {dataSeries}
}
