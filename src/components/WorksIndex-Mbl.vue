<template>
     <div class="work-index">
      <div class="year-wrap">
        <span class="year">'22</span>
        <div class="works-wrap">
          <div v-for="work in works" :key="work.id">
            <SingleWork v-if="work.year === 22" :work="work" :idClicked="id" />
          </div>
        </div>
      </div>
  
      <div class="year-wrap">
        <span class="year">'21</span>
        <div class="works-wrap">
          <div v-for="work in works" :key="work.id">
            <SingleWork v-if="work.year === 21" :work="work" :idClicked="id" />
          </div>
        </div>
      </div>
  
      <div class="year-wrap">
        <span class="year">'20</span>
        <div class="works-wrap">
          <div v-for="work in works" :key="work.id">
            <SingleWork v-if="work.year === 20" :work="work" :idClicked="id"/>
          </div>
        </div>
      </div>
    </div> 
  </template>
  
  <script>
  import { ref } from "vue";
  import SingleWork from "./SingleWork.vue";
  
  export default {
    props: {
      works: Object,
       id: Number,
    },
    components: { SingleWork },
    setup(props,{emit}) {
      const showDetailsId = ref(0);
      return { showDetailsId};
    },
  };
  </script>
  
  <style scoped>
  .year-wrap {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .works-wrap {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    cursor: pointer;
  }
  
  .year {
    font-family: "rotablack_italic";
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
  }
  </style>
  