/**
 * reducer
 * by xiaoT
 */

let initState = {
  userInfo: { // 当前用户信息
    isLogin: true
  }
}

export default function (state = initState, action) {
  let { userInfo } = action
  switch (action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, { userInfo })
    default:
      return state
  }
}
