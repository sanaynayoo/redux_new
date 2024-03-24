const apiEndPoint = 'https://jsonplaceholder.typicode.com';

const defaultsHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fetchPost = async (url: string, data: any) => {
  let response = null;

  try {
    response = await fetch(apiEndPoint + url, {
      method: 'POST',
      headers: defaultsHeader,
      body: JSON.stringify(data),
    });

    if (response !== null) {
      let reqJson = await response.json();
      return JSON.parse(reqJson);
    }
  } catch (error) {
    console.log('error :', error);
  }

  return null;
};

export const fetchGetImages = async (url: string, data: any) => {
  let response = null;
  try {
    response = await fetch(apiEndPoint + url, {
      method: 'GET',
      headers: defaultsHeader,
      body: JSON.stringify(data),
    });
    if (response !== null) {
      let reqJson = await response.json();
      return JSON.parse(reqJson);
    }
  } catch (error) {
    console.log('error:', error);
    throw error;
  }

  return null;
};

export const fetchPostWithToken = async (
  url: string,
  data: any,
  token: string,
) => {
  let response = null;
  try {
    response = await fetch(apiEndPoint + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });

    if (response !== null) {
      let reqJson = await response.json();
      return JSON.parse(reqJson);
    }
  } catch (error) {
    console.log('there was an error', error);
    throw error;
  }

  return null;
};

export const fetchUploadImage = async (
  url: string,
  data: string,
  token: string,
) => {
  let response = null;
  try {
    response = await fetch(apiEndPoint + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'Multipart/form-data',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });

    if (response !== null) {
      let reqJson = await response.json();
      return JSON.parse(reqJson);
    }
  } catch (error) {
    console.log('there was an error', error);
    throw error;
  }
};
