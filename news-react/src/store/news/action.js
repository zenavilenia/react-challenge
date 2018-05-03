import { LOAD_NEWS } from './action.type'

export const newList = (news) => ({
  type: LOAD_NEWS,
  payload: news
})