import { AppState } from "../AppState"
import { Apod } from "../models/Apod"
import { logger } from "../utils/Logger"
import { apodApi, apodDatedApi } from "./AxiosService"



class ApodService {
async getApod(){
  const res = await apodApi.get('')
  logger.log(res.data)
  AppState.apod = new Apod(res.data)
  logger.log(AppState.apod)
}
async getDatedApod(date){
  console.log(date)
  const res = await apodDatedApi.get('apod?date='+ date + '&api_key=Da4AVPiOL4UV9dNeVXXUNrDFsUxpg7isFvPeyXhI')
  logger.log(res.data)
  AppState.apod = new Apod(res.data)
  logger.log(AppState.apod)
}

}

export const apodService = new ApodService()