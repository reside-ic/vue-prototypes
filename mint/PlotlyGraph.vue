<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import {Plotly} from "vue-plotly"
    import {defineComponent} from "@vue/composition-api";
    import {FilteringProps} from "./filteredData";
    import {Dictionary} from "vuex";
    import {SeriesDefinition, SeriesMetadata} from "./fakeAPIData";
    import {useLongFormatData} from "./longFormatDataSeries";
    import {useWideFormatData} from "./wideFormatDataSeries";

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

            let dataSeries = null;
            if (props.metadata.format == "long") {
                dataSeries = useLongFormatData(props).dataSeries
            } else {
                dataSeries = useWideFormatData(props).dataSeries
            }

            return {
                dataSeries
            }
        }
    })
</script>