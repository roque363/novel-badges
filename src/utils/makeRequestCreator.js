import axios from 'axios';

const resources = {};

const makeRequestCreator = () => {
  let call;

  return async (data) => {
    // Check if we made a request
    if (call) {
      // Cancel the previous request before making a new request
      call.cancel();
    }
    // Create a new CancelToken
    call = axios.CancelToken.source();
    try {
      if (resources[data.variables.search]) {
        // Return result if it exists
        return resources[data.variables.search];
      }

      const res = await axios({
        url: 'https://graphql.anilist.co',
        method: 'POST',
        data: data,
        cancelToken: call.token,
      });

      const result = res.data;
      // Store response
      resources[data.variables.search] = result;
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log('Request canceled', error.message);
      } else {
        // Handle usual errors
        console.log('Something went wrong: ', error.message);
      }
    }
  };
};

export const searchRequest = makeRequestCreator();

export default searchRequest;
