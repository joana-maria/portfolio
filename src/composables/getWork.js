import { ref } from 'vue';

const getWork = (id) =>{
    const work = ref(0)
    const error = ref(null)
    const names = ["","creative-emotions","phototyper","a-small-showcase-of-graphic-design-and-world-history","cuidar-de-ti","the-queens-gambit-project","nei","develop-way-you-think-as-a-designer","grokem-rehany-zejuh"];

    const load = async () => {
        try{
          let data = await fetch('http://localhost:3000/works/' + id)
          
          if(!data.ok){
             throw Error('That post does not exist!')
          }

          work.value = await data.json();
        }
        catch (err){
          error.value = err.message
          console.log(error.value)
        }
    }

    return {work, error, load}

}

export default getWork;