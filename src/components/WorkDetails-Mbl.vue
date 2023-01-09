<template>
  <div id="details-menu">
    <div id="menu-closed-mbl">
      <div id="col-1" v-if="closed">
        <div class="reference" id="name">
          <p>/NAME</p>
          <p style="margin-top: 7px">{{ work.title }}</p>
        </div>
        <div class="reference tag" id="link">
          <p>/CATHEGORY</p>
          <p style="margin-top: 7px">{{ work.cathegory }}</p>
        </div>
      </div>
      <swiper
        :pagination="true"
        :modules="modules"
        class="mySwiper"
        v-if="opened"
        style="height: 100%; position: relative; z-index: 0"
      >
        <swiper-slide id="slide-1">
          <div class="reference" id="name">
            <p>/NAME</p>
            <p style="margin-top: 7px">{{ work.title }}</p>
          </div>
          <div class="reference tag" id="cathegory">
            <p>/CATHEGORY</p>
            <p style="margin-top: 7px">{{ work.cathegory }}</p>
          </div>
          <div class="reference tag" id="link" v-if="work.link != ''">
            <p>/LINK</p>
            <p style="margin-top: 7px" v-html="work.link"></p>
          </div>
          <div class="reference tag" id="context">
            <p>/CONTEXT</p>
            <p style="margin-top: 7px" v-html="work.context"></p>
          </div>
          <div class="reference tag" id="role" v-if="work.role != ''">
            <p>/MAIN ROLE</p>
            <p style="margin-top: 7px">{{ work.role }}</p>
          </div>
          <div class="reference tag" id="colab" v-if="work.colaboration != ''">
            <p>/COLABORATION</p>
            <p style="margin-top: 7px" v-html="work.colaboration"></p>
          </div>
          <div class="reference tag" id="prof" v-if="work.professors != ''">
            <p>/PROFESSORS</p>
            <p style="margin-top: 7px" v-html="work.professors"></p>
          </div>
          <div class="reference tag" id="prof" v-if="work.advised != ''">
            <p>/ADVISED BY</p>
            <p style="margin-top: 7px" v-html="work.advised"></p>
          </div>
          <div class="reference tag" id="date" v-if="work.date != ''">
            <p>/DURATION</p>
            <p style="margin-top: 7px">{{ work.date }}</p>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="reference" id="description">
            <span v-html="work.body"></span>
          </div>
        </swiper-slide>
      </swiper>

      <img
        @click="open"
        id="plus"
        style="width: 15px; align-self: flex-end"
        src="/src/assets/plus.svg"
      />
    </div>
  </div>
  <div id="details">
    <div id="img-work">
      <Work1 v-if="id === 1" />
      <Work2 v-if="id === 2" />
      <Work3 v-if="id === 3" />
      <Work4 v-if="id === 4" />
      <Work5 v-if="id === 5" />
      <Work6 v-if="id === 6" />
      <Work7 v-if="id === 7" />
      <Work8 v-if="id === 8" />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, reactive, getCurrentInstance } from "vue";
import Work1 from "./workslayouts/Work-1.vue";
import Work2 from "./workslayouts/Work-2.vue";
import Work3 from "./workslayouts/Work-3.vue";
import Work4 from "./workslayouts/Work-4.vue";
import Work5 from "./workslayouts/Work-5.vue";
import Work6 from "./workslayouts/Work-6.vue";
import Work7 from "./workslayouts/Work-7.vue";
import Work8 from "./workslayouts/Work-8.vue";
import getWork from "../composables/getWork";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  props: {
    id: Number,
  },
  components: {
    Work1,
    Work2,
    Work3,
    Work4,
    Work5,
    Work6,
    Work7,
    Work8,
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const { work, error, load } = getWork(props.id);
    const a = ref(0);
    const closed = ref(true);
    const opened = ref(false);
    load();

    function open(event) {
      closed.value = !closed.value;
      opened.value = !opened.value;
      a.value++;
      if (a.value % 2 != 0) {
        event.target.src = "/src/assets/minus.svg";
        event.target.parentElement.style.height = "100%";
      } else {
        event.target.src = "/src/assets/plus.svg";
        event.target.parentElement.style.height = "40%";
      }
    }

    return { work, error, open, closed, opened, modules: [Pagination] };
  },
};
</script>

<style scoped>
#details {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  padding: 20px;
  padding-bottom: 0px;
  position: absolute;
  display: grid;
  width: 100%;
  height: 94%;
  margin: 0;
  max-width: 100%;
  color: #000000;
  overflow-y: auto;
}

#details-menu {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  padding-bottom: 0px;
  position: absolute;
  display: grid;
  width: 100%;
  height: 94%;
  margin: 0;
  max-width: 100%;
  color: #000000;
}

p {
  margin: 0;
  font-size: 12px;
}

.reference {
  font-family: "rotabold";
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  color: #a1a1a1;
}

#menu-closed-mbl {
  grid-area: 1/1 / span 5 / span 2;
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  height: 40%;
  top: 0;
  z-index: 2;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  gap: 10px;
  padding: 20px;
  padding-top: 60px;
}

#slide-1 {
  display: flex;
  flex-direction: column;
}

#col-1 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

#col-2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

#img-work {
  grid-area: 3/1 / span 4 / span 2;
  overflow-y: auto;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
}

#plus {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
}

.tag {
  margin-top: 3vh;
}
</style>
