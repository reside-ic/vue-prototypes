<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label class="font-weight-bold">Indicator</label>
                    <treeselect :multiple=false
                                :clearable="false"
                                :options="metadata.indicators"
                                :value=indicator.indicator
                                :normalizer="normalizeIndicators"
                                @input="indicatorSelected"></treeselect>
                </div>
                <div class="form-group">
                    <label class="font-weight-bold">X Axis</label>
                    <treeselect :multiple=false
                                :clearable="false"
                                :options="metadata.filters"
                                :value=xAxis.id
                                @input="xAxisSelected"></treeselect>
                </div>
                <div class="form-group">
                    <label class="font-weight-bold">Disaggregate by</label>
                    <treeselect :multiple=false
                                :clearable="false"
                                :options="metadata.filters"
                                :value=disaggregateBy.id
                                @input="disaggregateBySelected"></treeselect>
                </div>
                <hr/>
                <h3>Filters</h3>
                <div v-for="filter in metadata.filters" class="form-group">
                    <label class="font-weight-bold">{{filter.label}}</label>
                    <treeselect :id="'elem' + filter.id"
                                :multiple=isXAxisOrDisagg(filter.id)
                                :clearable="false"
                                :options="filterOptions(filter.id)"
                                :value="filterValue(filter.id)"
                                @input="filterValueChanged"></treeselect>
                    <span v-if="isXAxisOrDisagg(filter.id)" class="text-muted">
                        <small>{{filterBadgeText(filter.id)}}</small>
                    </span>
                </div>
            </div>
            <div class="col-md-9">
                <chartjs-bar :chartdata="processedOutputData" :xLabel="xAxis.label" yLabel="Indicator"></chartjs-bar>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import Treeselect from '@riophae/vue-treeselect';
    import ChartjsBar from "./chartjsBar.vue";
    import {BarIndicator, BarMetadata, BarMetadataFilter, DataFilters} from "./types";
    import {
        sampleMetadata,
        sampleDataFilters,
        sampleData,
        colors
    } from "./data";

    interface Data {
        chartData: any,
        dataFilters: DataFilters,
        metadata: BarMetadata,

        indicator: BarIndicator,
        xAxis: BarMetadataFilter,
        disaggregateBy: BarMetadataFilter,

        selectedFilterValues: {[k: string]: string[]}
    }

    interface Methods {
        normalizeIndicator: (node: BarIndicator) => any;
    }

    interface Computed {
        processedOutputData: any
    }

    interface Props {

    }

    export default Vue.extend<Data, {}, Computed, Props>(
        {
            name: "ChartjsMetadata",
            data: function(){
                const metadata = sampleMetadata;
                const dataFilters = sampleDataFilters;

                const xAxis = metadata.filters[0];
                const disaggregateBy = metadata.filters[1];

                const selectedFilterValues = {} as {[k: string]: string[]};
                //TODO: repurpose this as updateFilters once filters are editable
                for (const filter of sampleMetadata.filters){
                    const values = [] as string[];
                    if (filter != xAxis && filter != disaggregateBy) {
                        //select a single filter value where we need to
                        values.push(dataFilters[filter.id][0].id);
                    }
                    selectedFilterValues[filter.id] = values;
                }

                return {
                    //These will be provided in props from outer component
                    chartData: sampleData,
                    dataFilters: dataFilters,
                    metadata: sampleMetadata,

                    indicator: sampleMetadata.indicators[0],
                    xAxis: xAxis,
                    disaggregateBy: disaggregateBy,

                    selectedFilterValues: selectedFilterValues
                }
            },
            computed: {
                /*singleFilters: function() {
                    const xAxisId = this.xAxis.id;
                    const disAggId = this.disaggregateBy.id;
                    return sampleMetadata.filters.filter(f => (f.id != xAxisId) && (f.id != disAggId));
                },/
                /*singleFilterValues() {
                    //TODO: until this comes from user input, select no values for the x axis and disaggregate, and first value
                    //for the singe value filters
                    const result = {} as DataFilters;
                    for  (const f of this.singleFilters) {
                        const filterOptions = this.dataFilters[f.id];
                        result[f.id] = [filterOptions[0]];
                    }
                    return result;
                },*/
                processedOutputData () {
                    const labels: string[] = [];
                    const datasets: any[] = [];

                    let colorIdx = 0;
                    for(const r of this.chartData){
                        const row = r as any;

                        //filter by indicator
                        if (row[this.indicator.indicator_column] != this.indicator.indicator_value) {
                            continue;
                        }

                        //filter by other filters
                        for (const filterId of Object.keys(this.selectedFilterValues)) {
                            const filterValues = this.selectedFilterValues[filterId];
                            if (filterValues.length > 0 && filterValues.indexOf(row[filterId]) < 0) {
                                    continue;
                            }
                        }

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
            methods: {
                normalizeIndicators(node: BarIndicator) {
                    return {id: node.indicator, label: node.name};
                },
                indicatorSelected(value: string) {
                    this.indicator = this.metadata.indicators.filter(i => i.indicator == value)[0];
                },
                xAxisSelected(value: string) {
                    this.xAxis = this.metadata.filters.filter(f => f.id == value)[0];
                },
                disaggregateBySelected(value: string) {
                    this.disaggregateBy = this.metadata.filters.filter(f => f.id == value)[0];
                },
                filterOptions(filterId: string) {
                    return this.dataFilters[filterId]
                },
                filterValue(filterId: string) {
                    return this.selectedFilterValues[filterId]
                },
                filterValueChanged(value: any, instanceId: any) {
                    //TODO: !!
                    alert("filter value changed. value: " + JSON.stringify(value) + ". instanceId: " + JSON.stringify(instanceId));
                },
                isXAxisOrDisagg(filterId: string) {
                    return this.xAxis.id == filterId || this.disaggregateBy.id == filterId
                },
                filterBadgeText(filterId: string) {
                    if (filterId == this.xAxis.id) {
                        return ("x axis");
                    } else {
                        return "disaggregate by"
                    }
                }
            },
            components: {
                ChartjsBar,
                Treeselect
            }
        });

</script>
