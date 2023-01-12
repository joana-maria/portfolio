<template>
  <div v-if="breakpoints.desktop.matches" class="work">
    <router-link :to="{ name: 'works', params: { id: work.id } }">
      <div class="work-title" :class="{ active: work.id != newIdClicked && changed }">
        <p>{{ work.title }}</p>
        <p id="work-tag">{{ work.tag }}</p>
      </div>
    </router-link>
    <router-view></router-view>
  </div>

  <div v-if="breakpoints.mobile.matches" class="work-mbl">
    <router-link :to="{ name: 'works', params: { id: work.id } }">
      <div class="work-title"  :class="{ active: work.id != newIdClicked && changed }">
        <p>{{ work.title }}</p>
        <p id="work-tag-mbl">{{ work.tag }}</p>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import useBreakpoints from "vue-next-breakpoints";
import { RouterLink, RouterView } from "vue-router";
import WorkDetails from "./WorkDetails.vue";
import { computed, ref, watch, toRef } from "vue";

export default {
  props: {
    work: Object,
    idClicked: Number,
  },
  components: { WorkDetails },
  setup(props) {
    const changed = ref(false);
    const idClickedref = toRef(props, "idClicked");
    const newIdClicked = ref(props.idClicked);

    if(props.idClicked!=undefined){
      changed.value = true;
    }

    watch(idClickedref, (x) => {
      newIdClicked.value = x;
      changed.value = true;
    });

    const breakpoints = useBreakpoints({
      mobile: 800, // max-width: 600px
      desktop: [801], // min-width: 601px
    });

    return { breakpoints, newIdClicked,changed };
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
.work {
  font-family: "rotamedium";
  font-size: 15px;
  line-height: 16px;
  margin-bottom: 7px;
}

.work-title {
  display: flex;
  flex-direction: row;
}

#work-tag {
  font-family: "rotamedium";
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: lowercase;

  color: #a1a1a1;
  margin-left: 10px;
}

.work-mbl {
  font-family: "rotamedium";
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 7px;
}

#work-tag-mbl {
  font-family: "rotamedium";
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: lowercase;

  color: #a1a1a1;
  margin-left: 10px;
}

.active {
  color: #a1a1a1;
  filter: blur(1px);
}

.work-title:hover {
  color: #000000;
  filter: none;
}
</style>
