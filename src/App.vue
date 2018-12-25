<template>
  <div id="app">
    <app-game  v-if="shouldCreateGame" :playerDetail="playerObj"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AppGame from './components/Game.vue';
import {isDevelopmentMode} from './environment';

@Component({
  components: {
    AppGame,
  },
})
export default class App extends Vue {
    @Prop() public player!: string;

    get playerObj() {
        if (isDevelopmentMode()) {
            return {name: `p${Math.floor(Math.random() * 10000)}`};
        }
        return this.isJsonString(this.player) ? JSON.parse(this.player) : this.player;
    }

    get shouldCreateGame() {
        return this.player || isDevelopmentMode();
    }

    private isJsonString(str: string) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}
</script>

