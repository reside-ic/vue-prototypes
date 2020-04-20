<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Plotly} from "vue-plotly"

    export default Vue.extend<any, any, any, any>({
        props: ["settings", "columns", "dataSet", "data", "layout"],
        components: {
            Plotly
        },
        computed: {
            dataSeries() {
                return this.data.map((d: any) => {
                    if (d.cols) {
                        const row = this.getRow(d.id);
                        return {
                            ...d,
                            y: d.y || d.cols.map((c: string) => row[c]),
                            error_y: d.error_y && this.getErrorBar(row, d.error_y)
                        }
                    }
                    else {
                        const rows = this.getRows(d);
                        return {
                            ...d,
                            x: rows[0],
                            y: rows[1]
                        }
                    }
                });
            }
        },
        methods: {
            filterBySettings(row: any) {
                for (let key of Object.keys(this.settings)){
                    if (row[key] && row[key] != this.settings[key]){
                        return false;
                    }
                }
                return true;
            },
            getRow(id: string) {
                return this.dataSet.find((row: any) => row["intervention"] == id && this.filterBySettings(row));
            },
            getRows(definition: any) {
                const x = [] as any[];
                const y = [] as any[];
                this.dataSet.map((row: any) => {
                    if (row["intervention"] == definition.id && this.filterBySettings(row)) {
                        x.push(row[definition.x_col])
                        y.push(row[definition.y_col])
                    }
                });
                return [x, y]
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