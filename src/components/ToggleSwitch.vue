<template src="./toggle-switch.vue.html"></template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    @Prop()
    enabled: boolean;

    protected onToggled() {
        this.enabled = !this.enabled;
    }
}
</script>

