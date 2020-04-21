<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import {Plotly} from "vue-plotly"
    import {computed, defineComponent} from "@vue/composition-api";
    import {FilteringProps, useFiltering} from "./filteredData";
    import {Dictionary} from "vuex";
    import {LongFormatSeriesMetadata, SeriesDefinition, SeriesMetadata, WideFormatSeriesMetadata} from "./fakeAPIData";

    interface Props extends FilteringProps {
        series: SeriesDefinition[]
        metadata: SeriesMetadata
        layout: Dictionary<string>
    }

    export default defineComponent({
        components: {
            Plotly
        },
        props: {settings: Object, data: Array, series: Array, metadata: Object, layout: Object},
        setup(props: Props) {
            const {filteredData} = useFiltering(props)

            const getRow = (id: string) => {
                return filteredData.value.find((row: any) => row[props.metadata.id_col] == id);
            }

            const getRows = (definition: SeriesDefinition) => {
                const x = [] as any[];
                const y = [] as any[];
                const meta = props.metadata as LongFormatSeriesMetadata
                filteredData.value.map((row: any) => {
                    if (row[meta.id_col] == definition.id) {
                        x.push(row[meta.x_col])
                        y.push(row[meta.y_col])
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
                return props.series.map((d: SeriesDefinition) => {
                    if (d.x && d.y) {
                        // all values are given explicitly
                        return d
                    }
                    if (d.id && props.metadata.format == "wide") {
                        const row = getRow(d.id);
                        return {
                            ...d,
                            y: props.metadata.cols.map((c: string) => row[c]),
                            error_y: d.error_y && getErrorBar(row, d.error_y)
                        }
                    } else if (d.id && props.metadata.format == "long") {
                        const rows = getRows(d);
                        return {
                            ...d,
                            x: rows[0],
                            y: rows[1]
                        }
                    }
                    // ignore invalid definitions
                    return null
                });
            });

            return {
                dataSeries
            }
        }
    })
</script>