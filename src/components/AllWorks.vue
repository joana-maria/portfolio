<template>
  <div id="details">
    <div id="col">
      <router-link :to="{ name: 'works', params: { id: 2 } }">
        <img class="img-bckg" src="/src/assets/allworks/1.gif"> 
      </router-link>
      <router-link :to="{ name: 'works', params: { id: 1 } }">
        <img class="img-bckg" src="/src/assets/allworks/3.png"> 
      </router-link>
      <router-link :to="{ name: 'works', params: { id: 3 } }">
        <img class="img-bckg" src="/src/assets/allworks/5.png"> 
      </router-link>
      <router-link :to="{ name: 'works', params: { id: 5 } }">
      <img class="img-bckg" src="/src/assets/allworks/7.png"> 
    </router-link>
    </div>
    <div id="col">
      <router-link :to="{ name: 'works', params: { id: 7 } }">
        <img class="img-bckg" src="/src/assets/allworks/2.png"> 
      </router-link>
      <router-link :to="{ name: 'works', params: { id: 8 } }">
        <img class="img-bckg" src="/src/assets/allworks/4.png"> 
      </router-link>
      <router-link :to="{ name: 'works', params: { id: 6 } }">
        <img class="img-bckg" src="/src/assets/allworks/6.png"> 
      </router-link>
      <router-link :to="{ name: 'works', params: { id: 4 } }">
        <img class="img-bckg" src="/src/assets/allworks/8.gif"> 
      </router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
#details {
  grid-area: 1/3 / span 2 / span 4;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  overflow-y: auto;
}

.img-bckg {
   width: 100%; 
}

/*Column 1 */
#col {
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

</style>
