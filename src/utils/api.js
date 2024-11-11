import axios from 'axios';

export const postBusinessData = async (body) => {
  try {
    const response = await axios.post(
      'https://nexbi-prototype-backend-v1-316384244630.europe-west2.run.app/business_data',
      body,
      {
        headers: {
          'accept': 'application/json',
          'auth-token': 'i2UwxFBdZIJu3x0WebzLgba3K7uubjglaG8Dx59HXxtKQ6VCzawaaZxoEX1M5qAK',
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Response status:', response.status);
    console.log('Response details:', response);

    return response.data;
  } catch (error) {
    console.error(`HTTP error! Status: ${error.response?.status}`);
    throw error;
  }
};

export const postCompetitorData = async (body) => {
  try {
    const response = await axios.post(
      'https://nexbi-prototype-backend-v1-316384244630.europe-west2.run.app/competitor_insights',
      body,
      {
        headers: {
          'accept': 'application/json',
          'auth-token': 'i2UwxFBdZIJu3x0WebzLgba3K7uubjglaG8Dx59HXxtKQ6VCzawaaZxoEX1M5qAK',
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Response status:', response.status);
    console.log('Response details:', response);

    return response.data;
  } catch (error) {
    console.error(`HTTP error! Status: ${error.response?.status}`);
    throw error;
  }
};

export const postWaitlist = async (body) => {
  try {
    const response = await axios.post(
      'https://nexbi-prototype-backend-v1-316384244630.europe-west2.run.app/waitlist',
      body,
      {
        headers: {
          'accept': 'application/json',
          'auth-token': 'i2UwxFBdZIJu3x0WebzLgba3K7uubjglaG8Dx59HXxtKQ6VCzawaaZxoEX1M5qAK',
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Response status:', response.status);
    console.log('Response details:', response);

    return response.data;
  } catch (error) {
    console.error(`HTTP error! Status: ${error.response?.status}`);
    throw error;
  }
};

export const postCheckInsights = async (body) => {
  try {
    const response = await axios.post(
      'https://nexbi-prototype-backend-v1-316384244630.europe-west2.run.app/check-insights',
      body,
      {
        headers: {
          'accept': 'application/json',
          'auth-token': 'i2UwxFBdZIJu3x0WebzLgba3K7uubjglaG8Dx59HXxtKQ6VCzawaaZxoEX1M5qAK',
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Response status:', response.status);
    console.log('Response details:', response);

    return response.data;
  } catch (error) {
    console.error(`HTTP error! Status: ${error.response?.status}`);
    throw error;
  }
};