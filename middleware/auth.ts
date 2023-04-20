import { Middleware } from '@nuxt/types'    

const authMiddleware: Middleware = ({ store, redirect }) => {
  // if (!store.state.User.user.isAuth) {
  //   console.log(store.state.User.user.isAuth, '인증이 안되어있습니다. ');
  //   redirect('/error/noAuth')
  // }
}

export default authMiddleware

