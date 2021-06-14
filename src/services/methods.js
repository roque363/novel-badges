export const GET = () => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const POST = (body) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  };
};

export const POST_FORM_DATA = (body) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: body,
  };
};

export const PUT = (body) => {
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  };
};

export const PUT_FORM_DATA = (body) => {
  return {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
    },
    body: body,
  };
};

export const DELETE = () => {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
