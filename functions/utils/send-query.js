require('dotenv').config();
const axios = require('axios');

module.exports = async (query, variables) => {
  try {
    const result = await axios({
      url: 'https://graphql.fauna.com/graphql',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
      },
      data: {
        query,
        variables,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
