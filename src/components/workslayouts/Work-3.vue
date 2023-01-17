<template>
    <div id="work-imgs">
      <div class="img-cnt" id="img1">
        <img src="/src/assets/work3/1a.jpg" />
        <img src="/src/assets/work3/1b.jpg" />
      </div>
      <div class="img-cnt" id="img2">
        <img src="/src/assets/work3/2.jpg" />
      </div>
      <div class="img-cnt" id="img3">
        <img src="/src/assets/work3/3.jpg" />
      </div>
      <div class="img-cnt" id="img4">
        <img src="/src/assets/work3/4.jpg" />
      </div>
      <div class="img-cnt" id="img5">
        <img src="/src/assets/work3/5.jpg" />
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
    overflow-x: hidden;
  }
  
  img {
    max-width: 100%;
    min-height: 100%;
  }
  
  img :hover {
    cursor: zoom-in;
    transform: scale(2);
  }

  #img1{
    display: flex;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
  }

  #img1 > img{
    width: 50%;
  }
  </style>
  