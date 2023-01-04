import { ref } from "vue";

const getWorks = () => {
  const works = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
     //   let data = await fetch("http://localhost:3000/works");

      // if (!data.ok) {
      //   throw Error("no data available");
      // }

   //   works.value = await data.json();

      fetch("/data/works.json")
        .then((res) => res.json())
        .then((data2) => {
          console.log("locally: ");
          console.log(data2);
          works.value =data2.works;
          console.log(data2.works);
        });

     
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { works, error, load };
};

export default getWorks;
