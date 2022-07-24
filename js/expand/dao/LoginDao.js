import Constants from './Constants';
import {post} from './HiNet';

//使用单例模式实现登录功能
export default function LoginDao() {
  let instance;
  class loginSingleton {
    constructor() {}
    login(userName, password) {
      return new Promise((resolve, reject) => {
        const {
          login: {api},
        } = Constants;
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', password);
        // post(api)(formData)()
        //   .then(res => {
        //     const {code, data, msg} = res;
        //     if (code === 0) {
        //       resolve(data || msg);
        //     } else {
        //       reject(res);
        //     }
        //   })
        //   .catch(err => {
        //     console.log('error', err);
        //     reject({code: -1, msg: '哎呀，出错了'});
        //   });
        fetch('https://api.devio.org/uapi/user/login', {
          method: 'post',
          body: {
            userName: 1,
            password: 2,
          },
          headers: {
            'course-flag': 'rn',
          },
        }).then(res => console.log('-----------', res));
      });
    }
  }
  return () => {
    if (instance == null) {
      instance = new loginSingleton();
    }
    return instance;
  };
}
