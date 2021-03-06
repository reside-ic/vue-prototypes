import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
import Impact from "./Impact.vue";
import Scatter from "./Scatter.vue";
import Cost from "./Cost.vue";

Vue.use(VueCompositionApi);

new Vue({
    el: "#app",
    components: {
        Impact,
        Scatter,
        Cost
    }
});

