import axios from 'axios';
import { BACKEND_URI, REVIEWS_URI } from '../constants/endpoints';

export default {
  maps: {
    location: address =>
      axios
        .get(BACKEND_URI, {
          params: {
            address
          }
        })
        .then(res => res.data)
  },
  reviews: {
    anything: review =>
      axios
        .post(REVIEWS_URI, {
          body: {
            ...review
          }
        })
        .then(res => res.data)
  }
};
