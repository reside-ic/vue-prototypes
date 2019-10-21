import Vue from "vue";
import ChartjsProto from "./hardcodedData/chartjsProto.vue";
import ChartjsFilter from "./processedData/chartjsFilter.vue";
import GoogleProto from "./hardcodedData/googleProto.vue";

new Vue({
    el: "#app",
    components: {
        ChartjsProto,
        ChartjsFilter,
        GoogleProto
    }
});