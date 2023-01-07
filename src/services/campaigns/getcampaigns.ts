import type { ApiContext, Campaign } from 'types'
import { fetcher } from 'utils'

/**
 * レビューAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns レビュー一覧
 */

/*サンプル
    {
      "id":1,
      "campaignImageUrl":"/campaigns/1.jpg"
    }*/

const getCampaigns = async (context: ApiContext): Promise<Campaign[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/campaigns`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getCampaigns
