import Vue from "vue";
import ChartjsProto from "./hardcodedData/chartjsProto.vue";
import ChartjsFilter from "./processedData/chartjsFilter.vue";

new Vue({
    el: "#app",
    components: {
        ChartjsProto,
        ChartjsFilter
    }
});