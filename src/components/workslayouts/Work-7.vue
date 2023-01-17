<template>
    <div id="work-imgs">
      <div class="img-cnt" id="img1">
        <img src="/src/assets/work7/1.jpg" />
      </div>
      <div class="img-cnt sbyside" id="img2">
        <img src="/src/assets/work7/2a.jpg" />
        <img src="/src/assets/work7/2b.jpg" />
      </div>
      <div class="img-cnt sbyside" id="img3">
        <img src="/src/assets/work7/3a.jpg" />
        <img src="/src/assets/work7/3b.jpg" />
      </div>
      <div class="img-cnt" id="img4">
        <img src="/src/assets/work7/4.jpg" />
      </div>
      <div class="img-cnt sbyside" id="img5">
        <img src="/src/assets/work7/5a.jpg" />
        <img src="/src/assets/work7/5b.jpg" />
      </div>
      <div class="img-cnt" id="img6">
        <img src="/src/assets/work7/6.gif" />
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

  .sbyside{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sbyside > img{
  width: 49.3%;
}
  </style>
  