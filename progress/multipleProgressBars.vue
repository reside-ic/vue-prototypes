<template>
    <div>
        <div class="my-2" :class="phase.value === 0 ? 'not-started' : 'in-progress'"
             v-for="(phase, index) in phases" :key="index">
            <span class="help-text">{{index + 1}}. {{phase.name}}{{phase.value > 0 && phase.helpText ? ": " + phase.helpText: ""}}</span>
            <tick color="#e31837" v-if="phase.value >= 1" width="20px"></tick>
            <b-progress :max="1" v-if="phase.value < 1"  >
                <b-progress-bar :value="phase.value">
                </b-progress-bar>
            </b-progress>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import {BProgress, BProgressBar} from "bootstrap-vue";
    import {Phase, phases} from "./types";
    import Tick from "./tick";

    interface Data {
        phases: Phase[],
        currentPhase: number,
        interval: number
    }

    export default Vue.extend<Data, {}, { numPhases: number }>({
        data() {
            return {
                phases: phases,
                interval: 0,
                currentPhase: 0
            }
        },
        computed: {
            numPhases: function () {
                return this.phases.length
            }
        },
        components: {
            BProgress,
            BProgressBar,
            Tick
        },
        created() {
            const self = this;

            this.interval = setInterval(() => {
                const currentPhase = self.phases[self.currentPhase];
                if (currentPhase.value >= 1) {
                    self.currentPhase += 1;
                }
                if (self.currentPhase == self.numPhases) {
                    clearInterval(self.interval);
                    self.currentPhase -= 1;
                } else {
                    self.phases[self.currentPhase].value += 0.01;
                }
            }, 500)
        }
    });

</script>
