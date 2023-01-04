<template>
  <!-- Desktop -->
  <div class="about-txt" v-if="breakpoints.desktop.matches">
    I’m <span id="about-bold">Joana Maria</span>, 
    <br>a portuguese designer <br>
    with a strong interest in print, web and creative coding.
  </div>
  <div id="index" v-if="works.length && breakpoints.desktop.matches">
    <WorksIndex :works="works" :id="idWorkRoute"/>
  </div>
  <WorkDetails
    :id="idWorkRoute"
    :key="idWorkRoute"
    v-if="breakpoints.desktop.matches"
  />

  <!-- Mobile -->
  
  <WorkDetailsMbl :id="idWorkRoute" :key="idWorkRoute" v-if="breakpoints.mobile.matches"/>

  <div
    id="menu-mbl"
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
      <WorksIndexMbl :works="works" :id="idWorkRoute"/>
    </div>
  </div>
</template>

<script>
import WorksIndex from "../components/WorksIndex.vue";
import WorkDetails from "../components/WorkDetails.vue";
import WorksIndexMbl from "../components/WorksIndex-Mbl.vue";
import WorkDetailsMbl from "../components/WorkDetails-Mbl.vue";

import getWorks from "../composables/getWorks.js";
import getWork from "../composables/getWork";
import { useRoute } from "vue-router";
import { watchEffect, watch, ref } from "vue";
import useBreakpoints from "vue-next-breakpoints";

export default {
  name: "Works",
  props: ["id"],
  components: { WorksIndex, WorkDetails, WorksIndexMbl, WorkDetailsMbl },
  setup(props) {
    const route = useRoute();
    const idWorkRoute = ref(Number(route.params.id));
    const extra = ref(false);
    const { works, error, load } = getWorks();
    load();

    // Define your breakpoints with any name
    const breakpoints = useBreakpoints({
      mobile: 800, // max-width: 600px
      desktop: [801], // min-width: 601px
    });

    watch(
      () => route.params.id,
      async (newId) => {
        idWorkRoute.value = Number(newId);
        //console.log(newId);
      }
    );

    function showExtra(event) {
      extra.value = !extra.value;
    }

    return { error, works, idWorkRoute, breakpoints, showExtra, extra };
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
  font-size: 19px;
  line-height: 26px;
  max-width: 278px;
}

#about-bold {
  grid-area: 1/2 / span 1 / span 1;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 26px;
}

.index-menu-mbl {
  grid-area: 4/1 / span 1 / span 2;
}

#within-grid {
  padding: 20px;
  padding-bottom: 0px;
  position: absolute;
  display: grid;
  width: 100%;
  height: 70%;
  margin: 0;
  max-width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  color: #000000;
  z-index: 1;
  position: absolute;
  top: 24%;
  overflow-y: auto;
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
