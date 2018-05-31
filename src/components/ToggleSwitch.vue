<template src="./toggle-switch.vue.html"></template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    @Prop()
    protected enabled: boolean;

    protected isEnabled = this.enabled ? this.enabled : false;

    protected onToggled() {
        this.isEnabled = !this.isEnabled;
        this.$emit("toggled", this.isEnabled);
    }
}
</script>

