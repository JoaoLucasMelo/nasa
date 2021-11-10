<template class="content-fluid template">
<div class="row">
  <div  class="col-6 d-flex apod mt-5 ms-4">
    <div class="card text-center border-2 border-primary">
    <img class="rounded-top elevation-3" :src="apod" alt="">
       <h5 class="mt-2">{{title}}</h5>
    </div>
  </div >
  <div class="col-6  d-flex flex-column justify-content-evenly align-items-center">
    <h1 class="">Picture of the day by NASA</h1>
    <div>
   <img class="astro" src="src\assets\img\5c9a0457b7e3470363aa7b8e (2).png"  alt="">
   </div>
  </div>
</div>
<div class="d-flex justify-content-center  mb-4">
  <h4 class="me-4">Try another day!</h4>
  <form @submit.prevent="getDate()">
  <input class="rounded border-2 border-primary elevation-2 me-2" placeholder="  Enter a Date:" v-model="date" for="date" type="date">
  <button class="btn-sm btn-primary elevation-2" type="submit">Submit</button>
  </form>
</div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core"
import { AppState } from "../AppState"
import { apodService } from "../services/apodService"
import { logger } from "../utils/Logger"
export default {
  setup() {
    const date = ref('')
    onMounted(async()=>{
      await apodService.getApod()
  })
  return{
    apod: computed (()=> AppState.apod.apod),
    title: computed (()=> AppState.apod.title),
    date,
    async getDate(){
      try {
        await apodService.getDatedApod(date.value)
      } catch (error) {
        logger.log(error)
      }
    }
  } 
  }
}


</script>

<style scoped lang="scss">
.apod{
width: 45%;
height: auto;
margin-bottom: 3em;
}
.astro{
  height: 250px;
}


</style>
