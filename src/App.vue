<script>
import { RouterLink, RouterView, useRoute } from "vue-router";
import useBreakpoints from "vue-next-breakpoints";
import { ref, watch } from "vue";

export default {
  setup() {
    // Define your breakpoints with any name
    const breakpoints = useBreakpoints({
      mobile: 800, // max-width: 600px
      desktop: [801], // min-width: 601px
    });
    const underline = ref(true);

    const route = useRoute();
    const routeName = ref(route.name);
    const userData = ref();

    console.log(route.name);
    watch(
      () => route.name,
      async (newName) => {
        routeName.value = newName;
        console.log(routeName.value);
        //console.log(newId);

        if (routeName.value === "home") {
          underline.value = true;
        } else if (routeName.value === "about") {
          underline.value = false;
        } 
      }
    );

    //document.body.className = "home";

    return { breakpoints, underline };
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

<template>
  <div id="menu" class="bold-txt" v-if="breakpoints.desktop.matches">
    <router-link to="/about">
      <div class="menu-btn" :class="{ active: !underline }" id="about">
        /ABOUT
      </div>
    </router-link>
    <router-link to="/">
      <div class="menu-btn" :class="{ active: underline }" id="work">/WORK</div>
    </router-link>
  </div>

  <div id="menu2" class="bold-txt" v-if="breakpoints.mobile.matches">
    <router-link to="/about">
      <div class="menu-btn" :class="{ active: !underline }" id="about">
        /ABOUT
      </div>
    </router-link>
    <router-link to="/">
      <div class="menu-btn" :class="{ active: underline }" id="work">/WORK</div>
    </router-link>
  </div>

  <router-view></router-view>
</template>

<style>
#menu {
  grid-area: 1/1 / span 1 / span 1;
}

.bold-txt {
  font-family: "rotabold";
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
}
.menu-btn:hover {
  text-decoration: underline;
  cursor: pointer;
}

.active {
  text-decoration: underline;
}

#menu2 {
  grid-area: 1/1 / span 1 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
  position: relative;
  z-index: 3;
}

.swiper-pagination-bullet-active {
  background-color: #000 !important;
}
</style>
