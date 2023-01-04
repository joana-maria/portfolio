<template>
  <!-- <div v-if="error">{{ error }}</div> -->
  <div class="about-txt" v-if="breakpoints.desktop.matches">
    I’m <span id="about-bold">Joana Maria</span>, <br />
    a portuguese designer <br />
    with a strong interest in print, <br />web and creative coding.
  </div>
  <div id="index" v-if="works.length && breakpoints.desktop.matches">
    <WorksIndex :works="works" />
  </div>
  <AllWorks :key="0" v-if="breakpoints.desktop.matches" />
  #3
  <!-- mobile -->
  <div id="within-grid" v-if="breakpoints.mobile.matches">
    <div class="about-txt-mbl" v-if="breakpoints.mobile.matches">
      I’m <span id="about-bold-mbl">Joana Maria</span>, <br />
      a portuguese designer <br />
      with a strong interest in print, <br />web and creative coding.
    </div>
    <AllWorksMbl :key="1" v-if="breakpoints.mobile.matches" />
  </div>
  <div
    :class="{ closed: !extra, opened: extra }"
    @click="showExtra"
    v-if="breakpoints.mobile.matches"
  >
    <img src="/src/assets/arrow.svg" />
    <div
      id="index-mbl"
      v-show="extra"
      v-if="works.length && breakpoints.mobile.matches"
    >
      <WorksIndexMbl :works="works" />
    </div>
  </div>
</template>

<script>
import useBreakpoints from "vue-next-breakpoints";

import WorksIndex from "../components/WorksIndex.vue";
import WorkDetails from "../components/WorkDetails.vue";
import AllWorks from "../components/AllWorks.vue";
import AllWorksMbl from "../components/AllWorks-Mbl.vue";
import WorksIndexMbl from "../components/WorksIndex-Mbl.vue";

import { computed, onMounted, ref } from "vue";
import getWorks from "../composables/getWorks.js";

export default {
  name: "Home",
  components: { WorksIndex, WorkDetails, AllWorks, AllWorksMbl, WorksIndexMbl },
  setup() {
    const { works, error, load } = getWorks();
    const extra = ref(false);
    load();

    function showExtra(event) {
      extra.value = !extra.value;
    }

    // Define your breakpoints with any name
    const breakpoints = useBreakpoints({
      mobile: 800, // max-width: 600px
      desktop: [801], // min-width: 601px
    });

    //change background
    document.body.className = "home";

    return { works, error, breakpoints, showExtra, extra };
  },
  created() {
    // Event listeners are optional but may come in handy.
    // You can register them inside setup, created or mounted methods.
    this.breakpoints.mobile.on("enter", (mq) => {
      console.log("Entered mobile breakpoint");
      console.log("Media Query", mq);
    });

    this.breakpoints.mobile.on("leave", (mq) => {
      console.log("Left mobile breakpoint");
      console.log("Media Query", mq);
    });
  },
};
</script>

<style scoped>
#index {
  grid-area: 2/1 / span 1 / span 2;
  display: flex;
  align-items: flex-end;
}
.about-txt {
  grid-area: 1/2 / span 1 / span 1;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  max-width: 278px;
}

#about-bold {
  grid-area: 1/2 / span 1 / span 1;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}

.about-txt-mbl {
  grid-area: 1/1 / span 1 / span 2;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 6%;
  height: 90px;
}

#about-bold-mbl {
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

.index-menu-mbl {
  grid-area: 4/1 / span 1 / span 2;
}

#within-grid {
  padding: 20px;
  position: absolute;
  width: 100%;
  display: grid;
  width: 100%;
  height: 100vh;
  margin: 0;
  max-width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  color: #000000;
  z-index: 1;
  position: absolute;
  top: 40px;
}

.closed {
  height: 30px;
  background-color: #efefef;
  width: 100%;
  z-index: 2;
  grid-area: 6/1 / span 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
  align-self: end;
}

.opened {
  height: 100%;
  background-color: #efefef;
  width: 100%;
  z-index: 2;
  grid-area: 6/1 / span 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
}
</style>
