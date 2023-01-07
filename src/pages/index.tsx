import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import getShops from 'services/shops/get-shops'
import getReviews from 'services/reviews/getreviews'
import { ApiContext, Shop, Review } from 'types'
import styled from 'styled-components'
import ShopCard from 'components/organisms/Shopcard'
import ReviewCard from 'components/organisms/Reviewcard'

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<HomeProps> = ({
  SummaryShop, Reviews
}: HomeProps) => {
  const renderShop = (Shops: Shop[]) => {
    return (
      Shops.map((s: Shop, i: number) => (
        <Box paddingLeft={i === 0 ? 0 : 2} key={s.id}>
          <Link href={`/products/${s.id}`} passHref>
            <ShopCard
              shopname={s.shopname}
              category={s.category}
              shopImageUrl={s.shopImageUrl}
              description={s.description}
            />
          </Link>
        </Box>
      ))
    )
  }
  const renderReview = (Reviews: Review[]) => {
    return (
      Reviews.map((r: Review, i: number) => (
        <Box paddingTop={i === 0 ? 0 : 2} key={r.id}>
          <ReviewCard
            name={r.name}
            star={r.star}
            comment={r.comment}
          />
        </Box>
      ))
    )
  }
  return (
    <Layout>
      <Flex padding={2} justifyContent="center" backgroundColor="primary">
        <Flex
          width={{ base: '100%', md: '1040px' }}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width="100%">
            <Text as="h1" marginBottom={0} color="white" variant="extraLarge">
              Gihyo C2Cで
            </Text>
            <Text as="h1" marginTop={0} color="white" variant="extraLarge">
              お気に入りのアイテムを見つけよう
            </Text>
          </Box>
          <Box width="100%">
            <Text as="p" color="white" variant="mediumLarge">
              Gihyo
              C2Cは実践的なNext.jsアプリケーション開発で使われるデモアプリです。モックサーバを使用しています。
              ソースコードは
              <Anchor
                as="a"
                style={{ textDecoration: 'underline' }}
                target="_blank"
                href="https://github.com/gihyo-book/ts-nextbook-app"
                variant="mediumLarge"
                color="white"
              >
                こちら
              </Anchor>
              のGithubからダウンロードできます。
            </Text>
            <Text as="p" color="white" variant="mediumLarge">
              このアプリはTypeScript/Next.jsで作成されており、バックエンドのモックAPIはjson-serverが使用されています。
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: '100%', md: '1040px' }}
        >
          <Box marginBottom={3}>
            <Text as="h2" variant="large">お店の情報</Text>
            {renderShop(SummaryShop)}
          </Box>
          <Text as="h2" variant="large">レビュー</Text>
          {renderReview(Reviews)}
        </Box>
      </Flex>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  // 各商品のトップ6個を取得し、静的ページを作成
  const [SummaryShop, Reviews] = await Promise.all([
    getShops(context),
    getReviews(context)
  ])
  return {
    props: {
      SummaryShop,
      Reviews
    }
  }
}

export default Home