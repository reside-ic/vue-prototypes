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
                    <treeselect :instanceId="filter.id"
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
    import {BarIndicator, BarMetadata, BarMetadataFilter, DataFilters, FilterOption} from "./types";
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

    interface Computed {
        processedOutputData: any
    }

    interface Props {

    }

    export default Vue.extend<Data, any, Computed, Props>(
        {
            name: "ChartjsMetadata",
            data: function(){
                const metadata = sampleMetadata;
                const dataFilters = sampleDataFilters;

                const xAxis = metadata.filters[0];
                const disaggregateBy = metadata.filters[1];

                const selectedFilterValues = {} as {[k: string]: string[]};
                for (const filter of sampleMetadata.filters){
                    selectedFilterValues[filter.id] = [];
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
                processedOutputData: function () {
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
                        let filterRow = false;
                        for (const filterId of Object.keys(this.selectedFilterValues)) {
                            const filterValues = this.selectedFilterValues[filterId];
                            if (filterValues.length > 0 && filterValues.indexOf(row[filterId]) < 0) {
                                filterRow = true;
                                break;
                            }
                        }
                        if (filterRow) {
                            continue;
                        }

                        const xAxisValue = row[this.xAxis.id];
                        const label = this.findFilterOption(this.xAxis.id, xAxisValue).label;
                        //These should really come from 'filters' in the desired order, but derive from the data here
                        if (labels.indexOf(label) < 0) {
                            labels.push(label);
                        }

                        const datasetValue = row[this.disaggregateBy.id];
                        const datasetLabel = this.findFilterOption(this.disaggregateBy.id, datasetValue).label;

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
            mounted() {
                this.refreshFilters([this.xAxis.id, this.disaggregateBy.id]);
            },
            methods: {
                findFilterOption(filterId: string ,filterValue: string){
                    return (this.dataFilters[filterId] as FilterOption[]).filter(f => f.id == filterValue)[0];
                },
                normalizeIndicators(node: BarIndicator) {
                    return {id: node.indicator, label: node.name};
                },
                indicatorSelected(value: string) {
                    this.indicator = (this.metadata.indicators as BarIndicator[]).filter(i => i.indicator == value)[0];
                },
                xAxisSelected(value: string) {
                    this.xAxis = (this.metadata.filters as BarMetadataFilter[]).filter(f => f.id == value)[0];
                    if (this.xAxis != this.disaggregateBy){
                        this.refreshFilters([value]);
                    }
                },
                disaggregateBySelected(value: string) {
                    this.disaggregateBy = (this.metadata.filters as BarMetadataFilter[]).filter(f => f.id == value)[0];
                    if (this.xAxis != this.disaggregateBy){
                        this.refreshFilters([value]);
                    }
                },
                filterOptions(filterId: string) {
                    return this.dataFilters[filterId]
                },
                filterValue(filterId: string) {
                    return this.selectedFilterValues[filterId]
                },
                filterValueChanged(value: string | string[], instanceId: any) {
                    this.selectedFilterValues[instanceId] = Array.isArray(value) ? value : [value];
                },
                isXAxisOrDisagg(filterId: string) {
                    return this.xAxis.id == filterId || this.disaggregateBy.id == filterId
                },
                filterBadgeText(filterId: string) {
                    //TODO: need to decide on styling for this, but for now just give an indication that these filters
                    //have been selected for axis or disagg
                    if (filterId == this.xAxis.id) {
                        return ("x axis");
                    } else {
                        return "disaggregate by"
                    }
                },
                refreshFilters(newMultiFilterIds: string[]){
                    //Called when there is a new xAxis or a new disaggregate by column or both
                    //That column will have gone from single-filter only to none or multiple --> if so, set filters to []
                    for (const multiFilterId of newMultiFilterIds) {
                        this.selectedFilterValues[multiFilterId] = [];
                    }

                    //Any previously multi columns which are no longer multi-enabled should have their value set to the
                    //first value of their previous multi values (if any), or the first available value if none were selected
                    for (const filterId of Object.keys(this.selectedFilterValues)) {
                        if (!this.isXAxisOrDisagg(filterId)){
                            const previousValues = this.selectedFilterValues[filterId];
                            const newValues = previousValues.length > 0 ? [previousValues[0]] : this.dataFilters[filterId][0].id;
                            this.selectedFilterValues[filterId] = newValues;
                        }
                    }
                }
            },
            components: {
                ChartjsBar,
                Treeselect
            }
        });

</script>
