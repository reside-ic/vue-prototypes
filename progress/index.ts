import Vue from "vue";
import ProgressWithPhaseIndicator from "./progressWithPhaseIndicator.vue";
import MultipleProgressBars from "./multipleProgressBars.vue";

new Vue({
    el: "#app",
    components: {
        MultipleProgressBars,
        ProgressWithPhaseIndicator
    }
});
