<template>
  <div id="details">
    <router-link :to="{ name: 'works', params: { id: 2 } }">
      <img class="img-bckg" src="/src/assets/allworks/1.gif" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 1 } }">
      <img class="img-bckg" src="/src/assets/allworks/3.png" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 3 } }">
      <img class="img-bckg" src="/src/assets/allworks/5.png" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 5 } }">
      <img class="img-bckg" src="/src/assets/allworks/7.png" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 7 } }">
      <img class="img-bckg" src="/src/assets/allworks/2.png" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 8 } }">
      <img class="img-bckg" src="/src/assets/allworks/4.png" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 6 } }">
      <img class="img-bckg" src="/src/assets/allworks/6.png" />
    </router-link>
    <router-link :to="{ name: 'works', params: { id: 4 } }">
      <img class="img-bckg" src="/src/assets/allworks/8.gif" />
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
#details {
  grid-area: 2/1 / span 3 / span 2;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  overflow-y: auto;
}

.img-bckg {
  width: 100%;
}

</style>
