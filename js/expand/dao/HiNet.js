import Constants from './Constants';

//发送get请求
export function get(api) {
  return async (params = {}) => {
    const {headers, url} = Constants;
    return handleData(fetch(buildParams(url + api, params)), {
      headers: {
        ...headers,
      },
    });
  };
}

//发送post请求
export function post(api) {
  return params => {
    return async (queryParmas = {}) => {
      const {headers, url} = Constants;
      let data = params instanceof FormData ? params : JSON.stringify(params);
      return handleData(fetch(buildParams(url + api, queryParmas)), {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
    };
  };
}

//处理接口返回的数据
function handleData(fetchAction) {
  return new Promise((resolve, reject) => {
    fetchAction
      .then(res => {
        const type = res.headers.get('Content-Type');
        if ((type || '').indexOf('json') !== -1) {
          return res.json();
        }
        return res.text();
      })
      .then(res => {
        console.log(res);
        if (typeof res === 'string') {
          throw new Error(res);
        }
        const {code, msg, data: {list = undefined} = {}} = res;
        if (code === 401) {
          return;
        }
        resolve(list || res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//构建fetch的url参数
function buildParams(url, params) {
  let newUrl = new URL(url);
  let finalUrl;
  if (typeof params === 'object') {
    for (const [key, value] of Object.entries(params)) {
      newUrl.searchParams.append(key, value.toString());
    }
    finalUrl = newUrl.toString();
  } else if (typeof params === 'string') {
    finalUrl = url.endWith('/') ? url + params : url + '/' + params;
  } else {
    finalUrl = newUrl.toString();
  }
  return finalUrl;
}
