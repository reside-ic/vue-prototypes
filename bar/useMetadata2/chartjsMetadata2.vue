<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label class="font-weight-bold">Indicator</label>
                    <treeselect :multiple=false
                                :clearable="false"
                                :options="indicators"
                                v-model=indicatorId
                                :normalizer="normalizeIndicators"></treeselect>
                </div>
                <div class="form-group">
                    <label class="font-weight-bold">X Axis</label>
                    <treeselect :multiple=false
                                :clearable="false"
                                :options="filtersAsOptions"
                                v-model=xAxisId></treeselect>
                </div>
                <div class="form-group">
                    <label class="font-weight-bold">Disaggregate by</label>
                    <treeselect :multiple=false
                                :clearable="false"
                                :options="filtersAsOptions"
                                v-model=disaggregateById></treeselect>
                </div>
                <hr/>
                <h3>Filters</h3>
                <div v-for="filter in filters" class="form-group">
                    <filter-select v-model="selectedFilterOptions[filter.id]"
                                   :is-disaggregate-by="filter.id === disaggregateById"
                                   :is-x-axis="filter.id === xAxisId"
                                   :label="filter.label"
                                   :options="filter.options"></filter-select>
                </div>
            </div>
            <div class="col-md-9">
                <chartjs-bar :chartdata="processedOutputData" :xLabel="xAxisLabel" :yLabel="indicator.name"></chartjs-bar>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import Treeselect from '@riophae/vue-treeselect';
    import ChartjsBar from "../useMetadata/chartjsBar.vue";
    import FilterSelect from "./FilterSelect.vue";
    import {Indicator, FilterOption, Filter} from "./types";
    import {getProcessedOutputData, toLookup} from "./utils";

    interface Props {
        chartData: any[],
        filters: Filter[],
        indicators: Indicator[]
    }

    interface Data {
        indicatorId: string,
        xAxisId: string,
        disaggregateById: string,
        selectedFilterOptions: any
    }

    interface Computed {
        xAxisLabel: string,
        filtersAsOptions: FilterOption[]
        indicator: Indicator
        processedOutputData: any,
        xAxisLabels: string[]
        xAxisLabelLookup: { [key: string]: string }
        barLabelLookup: { [key: string]: string }
    }

    const props = {
        chartData: {
            type: Array
        },
        filters: {
            type: Array
        },
        indicators: {
            type: Array
        }
    };

    export default Vue.extend<Data, any, Computed, Props>(
        {
            name: "Test",
            props: props,
            data: function () {
                const options = {} as any;
                this.filters.map((f) => {
                    options[f.id] = [f.options[0]]
                });

                return {
                    indicatorId: this.indicators[0].indicator,
                    xAxisId: this.filters[0].id,
                    disaggregateById: this.filters[1].id,
                    selectedFilterOptions: options
                }
            },
            computed: {
                xAxisLabels() {
                    return this.selectedFilterOptions[this.xAxisId].map((o: FilterOption) => o.label)
                },
                barLabelLookup() {
                    return toLookup(this.selectedFilterOptions[this.disaggregateById])
                },
                xAxisLabelLookup() {
                    return toLookup(this.selectedFilterOptions[this.xAxisId])
                },
                xAxisLabel() {
                    return this.filtersAsOptions.find((f: FilterOption) => f.id == this.xAxisId).label;
                },
                filtersAsOptions() {
                    return this.filters.map((f: Filter) => ({id: f.id, label: f.label}))
                },
                processedOutputData() {
                    return getProcessedOutputData(
                        this.chartData,
                        this.xAxisId,
                        this.disaggregateById,
                        this.indicator,
                        this.filtersAsOptions,
                        this.selectedFilterOptions,
                        this.barLabelLookup,
                        this.xAxisLabelLookup,
                        this.xAxisLabels)
                },
                indicator() {
                    return this.indicators.find((i: Indicator) => i.indicator == this.indicatorId)
                }
            },
            methods: {
                normalizeIndicators(node: Indicator) {
                    return {id: node.indicator, label: node.name};
                }
            },
            components: {
                ChartjsBar,
                Treeselect,
                FilterSelect
            }
        });

</script>
