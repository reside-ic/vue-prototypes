<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import {Plotly} from "vue-plotly"
    import {computed, defineComponent} from "@vue/composition-api";
    import {FilteringProps, useFiltering} from "./filteredData";
    import {Dictionary} from "vuex";

    interface Props extends FilteringProps {
        data: any[]
        layout: Dictionary<string>
    }

    export default defineComponent({
        components: {
            Plotly
        },
        props: { settings: Object, dataSet: Array, data: Array, layout: Object },
        setup(props: Props) {
            const {filteredData} = useFiltering(props)

            const getRow = (id: string) => {
                return filteredData.value.find((row: any) => row["intervention"] == id);
            }

            const getRows = (definition: any) => {
                const x = [] as any[];
                const y = [] as any[];
                filteredData.value.map((row: any) => {
                    if (row["intervention"] == definition.id) {
                        x.push(row[definition.x_col])
                        y.push(row[definition.y_col])
                    }
                });
                return [x, y]
            }

            const getErrorBar = (row: any, error: any) => {
                return {
                    ...error,
                    array: error.cols.map((c: string) => row[c]),
                    arrayminus: error.colsminus.map((c: string) => row[c])
                }
            }

            const dataSeries = computed(() => {
                return props.data.map((d: any) => {
                    if (d.cols) {
                        const row = getRow(d.id);
                        return {
                            ...d,
                            y: d.y || d.cols.map((c: string) => row[c]),
                            error_y: d.error_y && getErrorBar(row, d.error_y)
                        }
                    }
                    else if (d.y_col) {
                        const rows = getRows(d);
                        return {
                            ...d,
                            x: d.x || rows[0],
                            y: rows[1]
                        }
                    }
                    else return d
                });
            });

            return {
                dataSeries
            }
        }
    })
</script>