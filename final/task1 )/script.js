function pingRequest(obj) {
  return new Promise(async (resolve, reject) => {
    const { makeRequest, successCheck, retryTimeout = 2000 } = obj;

    const request = async () => {
      const data = await makeRequest();
      const isSuccessful = successCheck(data);

      if (isSuccessful) {
        resolve(data);
      } else {
        setTimeout(request, retryTimeout);
      }
    };

    request();
  });
}

const getData = async () => {
  const data = [null, 10, null, null, null, null, null, null];

  return data[Math.floor(Math.random() * 8)];
};
