<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                Filters go here
            </div>
            <div class="col-md-9">
                <chartjs-bar :chartdata="processedOutputData" :xLabel="xAxis.label" yLabel="Indicator"></chartjs-bar>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import ChartjsBar from "./chartjsBar.vue";
    import {BarIndicator, BarMetadataFilter, DataFilters} from "./types";
    import {
        sampleMetadata,
        sampleDataFilters,
        sampleData,
        colors
    } from "./data";

    interface Data {
        chartData: any,
        dataFilters: DataFilters,

        indicator: BarIndicator,
        xAxis: BarMetadataFilter,
        disaggregateBy: BarMetadataFilter
    }

    interface Computed {
        singleFilters: BarMetadataFilter[],
        singleFilterValues: DataFilters
        processedOutputData: any
    }

    interface Props {

    }

    export default Vue.extend<Data, {}, Computed, Props>(
        {
            name: "ChartjsFilter",
            data: function(){
                return {
                    //These will be provided in props from outer component
                    chartData: sampleData,
                    dataFilters: sampleDataFilters,

                    //TODO: Make these values editable by users
                    indicator: sampleMetadata.indicators[0],
                    xAxis: sampleMetadata.filters[0],
                    disaggregateBy: sampleMetadata.filters[1]
                }
            },
            computed: {
                singleFilters: function(){
                    const xAxisId = this.xAxis.id;
                    const disAggId = this.disaggregateBy.id;
                    return sampleMetadata.filters.filter(f => (f.id != xAxisId) && (f.id != disAggId));
                },
                singleFilterValues: function(){
                    //TODO: until this comes from user input, select no values for the x axis and disaggregate, and first value
                    //for the singe value filters
                    const result = {} as DataFilters;
                    for  (const f of this.singleFilters) {
                        const filterOptions = this.dataFilters[f.id];
                        result[f.id] = [filterOptions[0]];
                    }
                    return result;
                },
                processedOutputData: function(){
                    const labels: string[] = [];
                    const datasets: any[] = [];

                    let colorIdx = 0;
                    for(const r of this.chartData){
                        const row = r as any;

                        //filter by indicator
                        if (row[this.indicator.indicator_column] != this.indicator.indicator_value) {
                            continue;
                        }

                        //filter by x axis filters
                        for (const filter of this.singleFilters) {
                            const filterValue = this.singleFilterValues[filter.id][0].id;
                            if (row[filter.id] != filterValue) {
                                continue;
                            }
                        }

                        //TODO: filter by selected non-singlevalue filters (xAxis, disagg - may be no filters, or multiple)

                        const xAxisValue = row[this.xAxis.id];
                        const label = this.dataFilters[this.xAxis.id].filter(f => f.id == xAxisValue)[0].label;
                        //These should really come from 'filters' in the desired order, but derive from the data here
                        if (labels.indexOf(label) < 0) {
                            labels.push(label);
                        }

                        const datasetValue = row[this.disaggregateBy.id];
                        const datasetLabel = this.dataFilters[this.disaggregateBy.id].filter(f => f.id == datasetValue)[0].label;

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

                        const value = row[this.indicator.value_column];
                        const labelIdx = labels.indexOf(label);
                        while (dataset.data.length <= labelIdx){
                            dataset.data.push(0);
                        }
                        dataset.data[labelIdx] = value;

                        dataset.errorBars[label] = {};
                        dataset.errorBars[label].plus = row[this.indicator.error_high_column];
                        dataset.errorBars[label].minus = row[this.indicator.error_low_column];

                    }

                    return {
                        labels,
                        datasets
                    }
                }
            },
            components: {
                ChartjsBar
            }
        });

</script>
