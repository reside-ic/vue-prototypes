<template>
    <div>
        <label class="font-weight-bold">{{label}}</label>
        <tree-select :instanceId="id"
                     :multiple=isXAxisOrDisagg
                     :clearable="false"
                     :options="options"
                     :value="selectedValues"
                     @select="select"
                     @deselect="deselect"></tree-select>
        <span v-if="isXAxisOrDisagg" class="text-muted">
                        <small>{{badge}}</small>
                    </span>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {FilterOption} from "./types";
    import TreeSelect from '@riophae/vue-treeselect';

    interface Props {
        id: string
        options: FilterOption[]
        isXAxis: boolean
        isDisaggregateBy: boolean
        value: any[]
        label: string
    }

    const props = {
        id: String,
        options: Array,
        isXAxis: Boolean,
        isDisaggregateBy: Boolean,
        value: Array,
        label: String
    };

    interface Data {
        selected: any
    }

    interface Methods {
        isXAxisOrDisagg: boolean,
        selectedValues: any[]
        badge: string
    }

    export default Vue.extend<Data, {}, Methods, Props>({
        props,
        data() {
            return {
                selected: [this.value[0]]
            }
        },
        methods: {
            select(node: FilterOption) {
                if (!this.isXAxisOrDisagg) {
                    this.selected = [node]
                } else {
                    this.selected.push(node);
                }
                this.$emit("input", this.selected);
            }, deselect(node: FilterOption) {
                this.selected = this.selected.filter((n: any) => n.id != node.id);
                this.$emit("input", this.selected);
            }
        },
        computed: {
            isXAxisOrDisagg() {
                return this.isXAxis || this.isDisaggregateBy
            },
            selectedValues() {
                return this.isXAxisOrDisagg ? this.value.map(v => v.id) : [this.value[0].id]
            },
            badge() {
                if (this.isXAxis) {
                    return ("x axis");
                } else {
                    return "disaggregate by"
                }
            }
        },
        components: {
            TreeSelect
        }
    })
</script>