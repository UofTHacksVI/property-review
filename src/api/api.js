import axios from 'axios';

export default {
  user: {
    search: (address, credentials) =>
      axios.post('api/address', { credentials }).then(res => res.data),
    login: credentials =>
      axios.post('api/auth', { credentials }).then(res => res.data.user),
    signup: user => axios.post('api/users', { user }).then(res => res.data.user)
  }
};
