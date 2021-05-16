import axios from "axios";
import { baseUrl } from "./baseUrl";
import StorageService from "./storageService";

class AuthServices{

  static async SignUp(body){
    const url = baseUrl + "/user/signup";
    return axios.post(url,body);
  }

  static async SignIn(body){
    const url = baseUrl + "/user/signin";
    return axios.post(url,body);
  }

  static async UserProfile(body){
    const url = baseUrl + "/user/basic/profile";
    const key = StorageService.getValueFromKey("token");
    return axios.post(url,body,{
      headers: {
        "Authorization": `Bearer ${key}`
      }
    });
  }
  static async getUser(body){
    const url = baseUrl + "/user/skills";
    const key = StorageService.getValueFromKey("token");
    return axios.post(url,body,{
      headers: {
        "Authorization": `Bearer ${key}`
      }
    });
  }

}
export default AuthServices;
