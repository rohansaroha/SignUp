import axios from "axios";
import { baseUrl } from "./baseUrl";

class skillsServices{
  static async getSkills(){
    const url = baseUrl + "/skills";
    return axios.get(url);
  }

  static async addSkills(body){
    const url = baseUrl + "/user/skills";
    return axios.post(url,body);
  }
}
export default skillsServices;
