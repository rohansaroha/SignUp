import axios from "axios";
import { baseUrl } from "./baseUrl";

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
    const key = "as";
    return axios.post(url,body,{
      headers: {
        "Authorization": `Bearer ${key}`
      }
    });
  }

}
export default AuthServices;
