import type { ApiContext, Shop } from 'types'
import { fetcher } from 'utils'

/**
 * ショップAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ショップー一覧
 */

/*サンプル
  "shops":[
    {
      "id":1,
      "shopname":"お好み太郎",
      "shopImageUrl":"/shops/okonomitarou.jpg",
      "category":"お好み焼き",
      "description":"美味しいお好み焼きがウリです！"
    }*/
const getShops = async (context: ApiContext): Promise<Shop[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/shops`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getShops
