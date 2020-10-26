<template>
    <div>
        <div class="row">
            <div class="my-5 col-3" v-for="setting in settings">
                <label>{{setting.label}}</label>
                <div v-if="setting.options">
                    <select class="form-control" v-model="setting.value">
                        <option v-for="option in setting.options" :value="option.value">{{option.label}}</option>
                    </select>
                </div>
                <div v-if="!setting.options">
                    <input type="number" class="form-control" v-model="setting.value"/>
                </div>
            </div>
        </div>
        <div class="my-5">
            <plotly-graph :data="wideData"
                          :settings="selectedSettings"
                          :metadata="cost.metadata"
                          :series="cost.series"
                          :layout="cost.layout"></plotly-graph>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import {costGraph, settings, wideData} from "./fakeAPIData";
    import PlotlyGraph from "./PlotlyGraph.vue";

    export default Vue.extend({
        components: {PlotlyGraph},
        data() {
            return {
                settings: settings,
                wideData: wideData,
                cost: costGraph
            }
        },
        computed: {
            selectedSettings() {
                const result: any = {};
                settings.map(s => {
                    result[s.id] = s.value
                });
                return result;
            }
        }
    });
</script>
