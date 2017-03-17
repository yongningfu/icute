export var HOSTURL = '';

export function transFormData(objData) {

  var formData = new FormData();
  for (var key in objData) {
    formData.append(key, objData[key])
  }
  return formData;
}


function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

// 这个的 data err 处理的是访问错误类型的bug 比如无网络

export default function request(url, options) {
  return fetch( HOSTURL + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}
