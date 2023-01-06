import type { ApiContext, Review } from 'types'
import { fetcher } from 'utils'

/**
 * レビューAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns レビュー一覧
 */

/*サンプル
/*サンプル
{
      "id":1,
      "name":"しまD",
      "shopid":1,
      "star":4,
      "comment":"お好み焼きが美味しいです！"
    },*/

const getShops = async (context: ApiContext): Promise<Review[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/shops`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getShops
