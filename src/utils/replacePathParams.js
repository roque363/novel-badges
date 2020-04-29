const replacePathParams = (path, pathParams) => {
  let pathToGo = path;
  if (pathParams) {
    Object.keys(pathParams).forEach((param) => {
      pathToGo = pathToGo.replace(`:${param}`, pathParams[param]);
    });
  }
  return pathToGo;
};

export default replacePathParams;
