import axios from "axios";

const fetchDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
          console.log(response.data)
        } else {
          reject(new Error("Failed to fetch data from API"));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default fetchDataFromAPI;
