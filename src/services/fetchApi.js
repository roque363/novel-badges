async function fetchApi(data) {
  const { url, options, dataType, message } = data;

  const response = {
    info: { status: null, error: false, message: null },
    data: {},
  };

  if (dataType) {
    response.data = dataType;
  }

  try {
    const res = await fetch(url, options);
    const resData = await res.json();
    response.info.status = res.status;

    if (res.ok) {
      response.info.message = message.success;
      if (resData.data) {
        response.data = resData.data;
      } else {
        response.data = resData;
      }
    } else {
      response.info.message = message.error;
      response.info.error = true;
    }
  } catch (e) {
    response.info.message = 'Error: ' + e.message;
    response.info.error = true;
  }

  return { response };
}

export default fetchApi;
