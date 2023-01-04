import { ref } from "vue";

const getWorks = () => {
  const works = ref([]);
  const error = ref(null);
  let responseClone = ref(null);
  console.log("NOVO COMMIT");
  const load = async () => {
    try {
      //   let data = await fetch("http://localhost:3000/works");

      // if (!data.ok) {
      //   throw Error("no data available");
      // }

      //   works.value = await data.json();

      await fetch("/data/works.json")
        .then(function (response) {
          responseClone = response.clone(); // 2
          return response.json();
        })
        .then((data2) => {
          works.value = data2.works;
        },
        function (rejectionReason) {
          // 3
          console.log(
            "Error parsing JSON from response:",
            rejectionReason,
            responseClone
          ); // 4
          responseClone
            .text() // 5
            .then(function (bodyText) {
              console.log(
                "Received the following instead of valid JSON:",
                bodyText
              ); // 6
            });
        }
      );


    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { works, error, load };
};

export default getWorks;
