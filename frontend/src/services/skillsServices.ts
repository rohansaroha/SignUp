import axios from "axios";
import { baseUrl } from "./baseUrl";
import StorageService from "./storageService";

class skillsServices{
  static async getSkills(){
    const url = baseUrl + "/skills";
    return axios.get(url);
  }

  static async addSkills(body){
    console.log(body);
    const url = baseUrl + "/user/skills";const key = StorageService.getValueFromKey("token");
    return axios.post(url,body,{
      headers: {
        "Authorization": `Bearer ${key}`
      }
    });
  }
}
export default skillsServices;
