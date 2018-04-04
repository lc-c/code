import axios from "axios";
const url = "http://localhost:3000";
export default {
  login(data) {
    return axios.post(url+"/login",data);
  },
  getData(data) {
    return axios.post(url+"/getData",data);
  },
  delete(data){
    return axios.post(url+"/delete",data);
  },
  update(data){
    return axios.post(url+"/update",data);
  }
};
