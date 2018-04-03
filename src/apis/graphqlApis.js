import axios from 'axios';

const API_ROOT = 'https://us-west-2.api.scaphold.io/graphql/myspace';
const responseBody = res => res.data;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const requests = {
  query: body =>
    axios.post(`${API_ROOT}`, { query: body }, config).then(responseBody),
};

export default {
  requests,
};
