<template>
  <div id="work-imgs">
    <div class="img-cnt" id="img1">
      <img src="/src/assets/work2/1.gif" />
    </div>
    <div class="img-cnt" id="img2">
      <img src="/src/assets/work2/2.png" />
    </div>
    <div class="img-cnt" id="img3">
      <img src="/src/assets/work2/3.png" />
    </div>
    <div class="img-cnt" id="img4">
      <img src="/src/assets/work2/4.png" />
    </div>
    <div class="img-cnt" id="img5">
      <img src="/src/assets/work2/5.png" />
    </div>
    <div class="img-cnt" id="img6">
      <img src="/src/assets/work2/6.png" />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/*https://codepen.io/elevadorstudio/pen/zYxyVVy */
#work-imgs {
  grid-area: 2/1 / span 13 / span 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

img {
  object-fit: cover;
  width: 100%;
}

img :hover {
  cursor: zoom-in;
  transform: scale(2);
}
</style>
