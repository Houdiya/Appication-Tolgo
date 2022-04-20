import axios from "axios";

const getLocationAsync = async () =>
  axios
    .get(
      "http://api.ipstack.com/check?access_key=7c961a6c6c0c92a20270bd78eb58a386"
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));

export default getLocationAsync;
