import { ref } from "vue";

const getWork = (id) => {
  const work = ref(0);
  const error = ref(null);
  let responseClone = ref(null);

  const load = async () => {
    try {

      await fetch("https://joana-maria.github.io/data/works.json")
        .then(function (response) {
          responseClone = response.clone(); // 2
          return response.json();
        })
        .then(
          function (data) {
            data.works.forEach((workClicked) => {
              if (workClicked.id === id) {
                work.value = workClicked;
              }
            });
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

  return { work, error, load };
};

export default getWork;
