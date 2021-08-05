const API_KEY = process.env.REACT_APP_NYT_API_KEY;

const baseURL = `https://api.nytimes.com/svc/topstories/v2/`;

export const fetchAllStories = async (section) => {
  return fetch(`${baseURL}${section}.json?api-key=${API_KEY}`)
      .then(response => {
        handleErrors(response)
        return response.json()
      })
}

const handleErrors = (response) => {
  if (!response.ok) {
    console.log(response);
    throw new Error()
  }
}