<template>
    <div id="work-imgs">
      <div class="img-cnt" id="img1">
        <img src="/src/assets/work4/1.gif" />
      </div>
      <div class="img-cnt" id="img2">
        <img src="/src/assets/work4/2a.jpg" />
        <img src="/src/assets/work4/2b.jpg" />
       
      </div>
      <div class="img-cnt" id="img3">
        <img src="/src/assets/work4/3.png" />
      </div>
      <div class="img-cnt" id="img4">
        <img src="/src/assets/work4/4.jpg" />
      </div>
      <div class="img-cnt" id="img4">
        <img src="/src/assets/work4/5.png" />
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
    overflow-x: hidden;
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

  #img2{
    display: flex;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
  }

  #img2 > img{
    width: 50%;
  }
  </style>
  