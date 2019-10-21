import Vue from "vue";
import ChartjsFilter from "./processedData/chartjsFilter.vue";
import GoogleFilter from "./processedData/googleFilter.vue";

new Vue({
    el: "#app",
    components: {
        ChartjsFilter,
        GoogleFilter
    }
});