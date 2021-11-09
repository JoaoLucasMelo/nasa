<template class="content-fluid">
<div class="d-flex justify-content-center mt-3">
<h1 >Picture of the day by NASA</h1>
</div>
<div  class="d-flex justify-content-center mt-2">
  <div class="card apod rounded">
  <img class="rounded elevation-3" :src="apod" alt="">
  </div>
  </div >
<div class="d-flex justify-content-center ">
</div>
<div class="d-flex justify-content-center  mb-4">
  <form @submit.prevent="getDate()">
  <input class="rounded border-0 elevation-2 me-2" placeholder="  Enter a Date:" v-model="date" for="date" type="date">
  <button class="btn btn-primary elevation-2" type="submit">Submit</button>
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
width: 60%;
margin-bottom: 3em;
}
</style>
