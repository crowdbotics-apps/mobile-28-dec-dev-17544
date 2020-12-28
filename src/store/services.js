import axios from "axios"
import {
  NEW_CONNECTOR_HJGHJGHJ_JHGJG_USERNAME,
  NEW_CONNECTOR_HJGHJGHJ_JHGJG_PASSWORD
} from "react-native-dotenv"
const newConnectorhjghjghjjhgjg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/17544/storyboard/16425/",
  auth: {
    username: NEW_CONNECTOR_HJGHJGHJ_JHGJG_USERNAME,
    password: NEW_CONNECTOR_HJGHJGHJ_JHGJG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
