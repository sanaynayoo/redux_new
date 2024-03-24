const endPointUrl = 'https://jsonplaceholder.typicode.com';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const FetchPost = async (url: string, data: any) => {
  let response = null;
  try {
    response = await fetch(endPointUrl + url, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });
    if (response !== null) {
      let resJson = await response.json();
      return JSON.parse(resJson);
    }
  } catch (error) {
    console.log('There was an error fetching');
    throw error;
  }
  return null;
};

export const FetchPostWithToken = async (
  url: string,
  data: any,
  token: string,
) => {
  let response = null;
  try {
    response = await fetch(endPointUrl + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });
    if (response !== null) {
      let resJson = await response.json();
      return JSON.parse(resJson);
    }
  } catch (error) {
    console.log('There was an error fetching');
    throw error;
  }

  return null;
};

export const fetchGets = async (url: string, data: any) => {
  let response = null;
  try {
    response = await fetch(endPointUrl + url, {
      method: 'GET',
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });
    if (response !== null) {
      let resJson = await response.json();
      return JSON.parse(resJson);
    }
  } catch (error) {
    console.log('There was an error fetching');
    throw error;
  }

  return null;
};
