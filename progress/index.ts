import Vue from "vue";
import ProgressWithPhaseIndicator from "./progressWithPhaseIndicator.vue";
import ProgressWithPhases from "./progressWithPhases.vue";
import MultipleProgressBars from "./multipleProgressBars.vue";

new Vue({
    el: "#app",
    components: {
        ProgressWithPhases,
        MultipleProgressBars,
        ProgressWithPhaseIndicator
    }
});
