import { get } from '../utils/request'

const URL = 'https://test.youbaobao.xyz:18081/'

export function getHomeBook ( params ) {
  return get( `${ URL }book/home/v2`, params )
}

export function recommend () {
  return get( `${ URL }book/home/recommend/v2` )
}

export function freeRead () {
  return get( `${ URL }book/home/freeRead/v2` )
}
export function hotBook () {
  return get( `${ URL }book/home/hotBook/v2` )
}