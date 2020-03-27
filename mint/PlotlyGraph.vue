<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Plotly} from "vue-plotly"
    import {casesAvertedGraph} from "./fakeAPIData";

    export default Vue.extend<any, any, any, any>({
        props: ["settings", "columns", "dataSet", "data", "layout"],
        components: {
            Plotly
        },
        computed: {
            dataSeries() {
                return this.data.map((d: any) => {
                    const row = this.getRow(d.id);
                    return {
                        ...d,
                        y: d.y || d.cols.map((c: string) => row[c]),
                        error_y: d.error_y && this.getErrorBar(row, d.error_y)
                    }
                });
            }
        },
        methods: {
            filterBySettings(row: any) {
                for (let key of Object.keys(this.settings)){
                    if (row[key] != this.settings[key]){
                        return false;
                    }
                }
                return true;
            },
            getRow(id: string) {
                return this.dataSet.find((row: any) => row["intervention"] == id && this.filterBySettings(row));
            },
            getErrorBar(row: any, error: any) {
                return {
                    ...error,
                    array: error.cols.map((c: string) => row[c]),
                    arrayminus: error.colsminus.map((c: string) => row[c])
                }
            }
        }
    })
</script>