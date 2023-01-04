<template>
  <div id="work-imgs">
    <div class="img-cnt" id="img1">
      <img src="/src/assets/work6/1.png" />
    </div>
    <div class="img-cnt sbyside" id="img2">
      <img src="/src/assets/work6/2a.png" />
      <img src="/src/assets/work6/2b.png" />
    </div>
    <div class="img-cnt sbyside" id="img3">
      <img src="/src/assets/work6/3a.png" />
      <img src="/src/assets/work6/3b.png" />
    </div>
    <div class="img-cnt" id="img4">
      <img src="/src/assets/work6/4.png" />
    </div>
    <div class="img-cnt sbyside" id="img5">
      <img src="/src/assets/work6/5a.png" />
      <img src="/src/assets/work6/5b.png" />
    </div>
    <div class="img-cnt sbyside" id="img6">
      <img src="/src/assets/work6/6a.png" />
      <img src="/src/assets/work6/6b.gif" />
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
  gap: 10px;
}

img {
  max-width: 100%;
  min-height: 100%;
}

img :hover {
  cursor: zoom-in;
  transform: scale(2);
}

.sbyside{
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-width: 100%;
}

.sbyside > img{
  width: 50%;
}
</style>
