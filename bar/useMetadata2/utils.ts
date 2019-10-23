import {Indicator, Filter} from "./types";
import {colors} from "../useMetadata/data";

export const toLookup = (array: Filter[]) => array.reduce((obj, current) => {
    obj[current.id] = current.label;
    return obj
}, {} as { [key: string]: string });

export const getProcessedOutputData = (data: any[],
                                       xAxis: string,
                                       disaggBy: string,
                                       indicator: Indicator,
                                       filters: Filter[],
                                       selectedFilterValues: { [key: string]: any[] },
                                       barLabelLookup: { [key: string]: string },
                                       xAxisLabelLookup: { [key: string]: string },
                                       xAxisLabels: string[]) => {

    const datasets: any[] = [];

    let colorIdx = 0;
    for (const r of data) {
        const row = r as any;

        //filter by indicator
        if (row[indicator.indicator_column] != indicator.indicator_value) {
            continue;
        }

        //filter by other filters
        let filterRow = false;
        for (const filter of filters) {
            const filterValues = selectedFilterValues[filter.id].map(n => n.id);
            if (filterValues.length > 0 && filterValues.indexOf(row[filter.id]) < 0) {
                filterRow = true;
                break;
            }
        }
        if (filterRow) {
            continue;
        }

        const datasetValue = row[disaggBy];
        const datasetLabel = barLabelLookup[datasetValue];

        const xAxisValue = row[xAxis];
        const xAxisLabel = xAxisLabelLookup[xAxisValue];

        let dataset = datasets.filter(d => (d as any).label == datasetLabel)[0] || null;
        if (!dataset) {
            dataset = {
                label: datasetLabel,
                backgroundColor: colors[colorIdx],
                data: [],
                errorBars: {}
            };
            datasets.push(dataset);
            colorIdx++;
        }

        const value = row[indicator.value_column];
        const labelIdx = xAxisLabels.indexOf(xAxisValue);
        while (dataset.data.length <= labelIdx) {
            dataset.data.push(0);
        }
        dataset.data[labelIdx] = value;

        dataset.errorBars[xAxisLabel] = {};
        dataset.errorBars[xAxisLabel].plus = row[indicator.error_high_column];
        dataset.errorBars[xAxisLabel].minus = row[indicator.error_low_column];
    }

    return {
        labels: xAxisLabels,
        datasets
    }
};
