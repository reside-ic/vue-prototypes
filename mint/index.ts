import Vue from "vue";
import MultiLine from "./MultiLine.vue";
import BarChart from "./BarChart.vue";
import Scatter from "./Scatter.vue";

new Vue({
    el: "#app",
    components: {
        MultiLine,
        BarChart,
        Scatter
    }
});
