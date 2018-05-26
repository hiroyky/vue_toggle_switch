import ToggleSwitch from "./components/ToggleSwitch.vue";
import Vue from "vue";

const vue = new Vue({
    el: "#main",
    components: {
        "toggle-switch": ToggleSwitch
    }
});
