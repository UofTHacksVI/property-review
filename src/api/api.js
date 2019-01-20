import axios from 'axios';

export default {
  user: {
    search: url => axios.post(url).then(res => res.data)
  }
};
