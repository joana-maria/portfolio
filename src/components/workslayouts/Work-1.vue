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
      <img src="/src/assets/work1/4.png" />
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
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(33, 50px);
  column-gap: 10px;
  row-gap: 10px; */
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

/*
 #img1 {
  grid-area: 1/1 / span 9 / span 2;
}

#img2 {
  grid-area: 10/1 / span 9 / span 2;
}

#img3 {
  grid-area: 18/1 / span 9 / span 2;
}

#img4 {
  grid-area: 26/1 / span 9 / span 2;
}*/
</style>
