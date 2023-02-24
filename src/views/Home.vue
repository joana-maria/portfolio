<template>
  <!-- <div v-if="error">{{ error }}</div> -->

  <div class="about-txt" v-if="breakpoints.desktop.matches">
    <span id="about-bold">Joana Maria</span>, <br />
    a portuguese designer <br />
    with a strong interest in print, <br />web and creative coding.
  </div>
  <div class="downl" v-if="breakpoints.desktop.matches">
    <div>
      <span class="bold-txt grey">DOWNLOAD PORTFOLIO BY AREA</span>
      <a
        href="UXUIPortfolioJoanaMaria.pdf"
        target="_blank"
        style="margin-left: 15px"
        class="link bold-txt"
        >UI/UX</a
      >
      <a style="margin-left: 15px" class="grey bold-txt">GRAPHIC</a>
    </div>
  </div>
  
  <div id="index" v-if="works.length && breakpoints.desktop.matches">
    <WorksIndex :works="works" />
  </div>
  
  <AllWorks :key="0" v-if="breakpoints.desktop.matches" />

  <!-- mobile -->
  <div id="within-grid" v-if="breakpoints.mobile.matches">
    <div class="about-txt-mbl" v-if="breakpoints.mobile.matches">
      <span id="about-bold-mbl">Joana Maria</span>, <br />
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
      <WorksIndexMbl style="margin-bottom: 3vh" :works="works" />
      <div class="downl">
        <div>
          <span class="bold-txt grey">DOWNLOAD PORTFOLIO BY AREA</span>
          <a
            href="UXUIPortfolioJoanaMaria.pdf"
            target="_blank"
            style="margin-left: 15px"
            class="link bold-txt"
            >UI/UX</a
          >
          <a style="margin-left: 15px" class="grey bold-txt">GRAPHIC</a>
        </div>
      </div>
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
      // console.log("Entered mobile breakpoint");
      // console.log("Media Query", mq);
    });

    this.breakpoints.mobile.on("leave", (mq) => {
      // console.log("Left mobile breakpoint");
      // console.log("Media Query", mq);
    });
  },
};
</script>

<style scoped>
#index {
  grid-area: 2/1 / span 1 / span 2;
  display: flex;
  align-items: flex-end;
  margin-bottom: 4vh;
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
  margin-top: 12%;
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
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0;
  max-width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  color: #000000;
  z-index: 1;
  position: absolute;
  /* top: 40px; */
  overflow: hidden;
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

.bold-txt {
  font-family: "rotabold";
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
}

.link {
  text-decoration: underline;
}

.link:hover {
  font-family: "rotablack";
  cursor: pointer;
}

.grey {
  color: #a1a1a1;
}

.downl {
  grid-area: 2/1 / span 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
