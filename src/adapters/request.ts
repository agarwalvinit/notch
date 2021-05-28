import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://api.interview.staging.foodieorders.com/v3/",
});

const post = function (url: string, requestData: any) {
  return axios
    .post(url, requestData)
    .then((data) => data.data)
    .catch((err) => err);
};

const requestModule = {
  post,
};
export default requestModule;
