import { ref } from 'vue';

const getWorks = () => {
    const works = ref([])
    const error = ref(null)

    const load = async () => {
        try{
          let data = await fetch('http://localhost:3000/works')
          //console.log(data)

          if(!data.ok){
             throw Error('no data available')
          }

          works.value = await data.json();
        }
        catch (err){
          error.value = err.message
          console.log(error.value)
        }
    }

    return {works, error, load}

}

export default getWorks