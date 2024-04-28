import axios from 'axios';
import { ENDPOINT } from './Endpoint';

export const getListview = async(setData, pageNumber, pageSize) => {
    try {
        // Make a GET request to the API endpoint
        const response = await axios.get(ENDPOINT+ `?_page=${pageNumber}&_limit=${pageSize}`);
  
        // set the fetched posts in the state
        setData(response?.data)
      } catch (error) {
        // Handle any errors that occur during the request
        // return response?.data;
      }
  
}