/*サンプル
  "shops":[
    {
      "id":1,
      "shopname":"お好み太郎",
      "shopImageUrl":"/shops/okonomitarou.jpg",
      "category":"お好み焼き",
      "description":"美味しいお好み焼きがウリです！"
    }*/

export type Shop = {
    id: number
    shopname: string
    shopImageUrl: string
    category: string
    description: string
  }

  /*サンプル
{
      "id":1,
      "name":"しまD",
      "shopid":1,
      "star":4,
      "comment":"お好み焼きが美味しいです！"
    },*/
  
  // レビュー
  export type Review = {
    id: number
    name:string
    shopid:number
    star:number
    comment:string
  }

  //キャンペーン情報

  export type Campaign={
    id:number
    campaignImageUrl:string
  }
  
  // APIコンテキスト
  export type ApiContext = {
    apiRootUrl: string
  }
  