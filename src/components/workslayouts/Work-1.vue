<template>
  <div id="work-imgs">
    <div class="img-cnt" id="img1">
      <img src="/src/assets/work1/1.png" />
    </div>
    <div class="img-cnt" id="img2">
      <img src="/src/assets/work1/2.png" />
    </div>
    <div class="img-cnt" id="img3">
      <img src="/src/assets/work1/3.png" />
    </div>
    <div class="img-cnt" id="img4">
      <img src="/src/assets/work1/4.jpg" />
    </div>
  </div>
</template>

<script>
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
  overflow-x: hidden;
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
