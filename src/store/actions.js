/**
 * app store actions
 * by xiaoT
 */
import { UPDATE_USER } from './actionTypes.js'

export const updateUser = (userInfo) => {
  return {
    type: UPDATE_USER,
    userInfo
  }
}
