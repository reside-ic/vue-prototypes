<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Plotly} from "vue-plotly"
    import {prevGraph} from "./fakeAPIData";

    export default Vue.extend<any, any, any, any>({
        props: ["netUse", "columns", "dataSet"],
        components: {
            Plotly
        },
        data() {
            return {
                data: prevGraph.data,
                layout: prevGraph.layout
            }
        },
        computed: {
            dataSeries() {
                return this.data.map((d: any) => ({
                    ...d,
                    x: d.x || d.cols,
                    y: d.y || this.getYValues(d.id, d.cols)
                }));
            }
        },
        methods: {
            getYValues(id: string, cols: string[]) {
                const row = this.dataSet.find((row: any) => row["intervention"] == id && row["net_use"] == this.netUse);
                if (!row) return [];
                return cols.map((c: string) => row[c]);
            }
        }
    })
</script>