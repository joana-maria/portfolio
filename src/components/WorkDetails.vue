<template>
  <div id="details">
    <div class="reference" id="cathegory">
      <p>/CATHEGORY</p>
      <p style="margin-top: 10px">{{ work.cathegory }}</p>
    </div>
    <div class="reference" id="link" v-if="work.link != '' ">
      <p>/LINK</p>
      <p style="margin-top: 10px" v-html="work.link"></p>
    </div>
    <div class="reference" id="name">
      <p>/NAME</p>
      <p style="margin-top: 10px">{{ work.title }}</p>
    </div>

    <Work1 v-if="id === 1" />
    <Work2 v-if="id === 2" />
    <Work3 v-if="id === 3" />
    <Work4 v-if="id === 4" />
    <Work5 v-if="id === 5" />
    <Work6 v-if="id === 6" />
    <Work7 v-if="id === 7" />
    <Work8 v-if="id === 8" />

    <div id="lateral-content">
      <div class="reference" id="description">
        <span v-html="work.body"></span>
      </div>
      <div id="more-tags">
        <div class="reference tag" id="context">
          <p>/CONTEXT</p>
          <p style="margin-top: 10px" v-html="work.context"></p>
        </div>
        <div class="reference tag" id="role" v-if="work.role != '' ">
          <p>/MAIN ROLE</p>
          <p style="margin-top: 10px">{{ work.role }}</p>
        </div>
        <div class="reference tag" id="colab"  v-if="work.colaboration != '' ">
          <p>/COLABORATION</p>
          <p style="margin-top: 10px" v-html="work.colaboration"></p>
        </div>
        <div class="reference tag" id="prof" v-if="work.professors != '' ">
          <p>/PROFESSORS</p>
          <p style="margin-top: 10px" v-html="work.professors"></p>
        </div>
        <div class="reference tag" id="prof" v-if="work.advised != '' ">
          <p>/ADVISED BY</p>
          <p style="margin-top: 10px" v-html="work.advised"></p>
        </div>
        <div class="reference tag" id="date" v-if="work.date != '' ">
          <p>/DURATION</p>
          <p style="margin-top: 10px">{{ work.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { ref, watchEffect, reactive, getCurrentInstance } from "vue";
import Work1 from "../components/workslayouts/Work-1.vue";
import Work2 from "../components/workslayouts/Work-2.vue";
import Work3 from "../components/workslayouts/Work-3.vue";
import Work4 from "../components/workslayouts/Work-4.vue";
import Work5 from "../components/workslayouts/Work-5.vue";
import Work6 from "../components/workslayouts/Work-6.vue";
import Work7 from "../components/workslayouts/Work-7.vue";
import Work8 from "../components/workslayouts/Work-8.vue";
import getWork from "../composables/getWork";

export default {
  props: {
    id: Number,
  },
  components: {
    Work1,
    Work2,
    Work3,
    Work4,
    Work5,
    Work6,
    Work7,
    Work8,
  },
  setup(props) {
    const { work, error, load } = getWork(props.id);
    load();
    return { work, error };
  },
};
</script>

<style scoped>
#details {
  grid-area: 1/3 / span 2 / span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(14, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}

p {
  margin: 0;
}

.reference {
  font-family: "rotabold";
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #a1a1a1;
}

#cathegory {
  grid-area: 1/1 / span 1 / span 1;
}

#link {
  grid-area: 1/2 / span 1 / span 1;
}

#name {
  grid-area: 1/3 / span 1 / span 1;
}

#lateral-content {
  grid-area: 2/3 / span 13 / span 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
   overflow-y: auto;
}

#more-tags{
  align-self: flex-end;
  width: 50%;
  text-align: right;
}

.tag{
  margin-top: 25px;
}

#link{
  color: #a1a1a1;
}
</style>
