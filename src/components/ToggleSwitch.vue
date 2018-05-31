<template src="./toggle-switch.vue.html"></template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';
import VueTouch from "vue-touch";
Vue.use(VueTouch);
@Component({})
export default class extends Vue {
    @Prop()
    protected enabled: boolean;

    protected isEnabled = this.enabled ? this.enabled : false;

    protected onToggled() {
        this.isEnabled = !this.isEnabled;
        this.$emit("toggled", this.isEnabled);
    }

    protected turnOff() {
        this.isEnabled = false;
        this.$emit("toggled", this.isEnabled);
    }

    protected turnOn() {
        this.isEnabled = true;
        this.$emit("toggled", this.isEnabled);
    }
}
</script>

