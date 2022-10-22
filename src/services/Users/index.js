import axios from "axios";

const getGithubUsers = async (user) => {
  return axios
    .get(`${process.env.URL_FETCH}${user}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default getGithubUsers;
