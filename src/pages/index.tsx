import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import AppLogo from 'components/atoms/AppLogo'
import ScaleImage from 'components/atoms/ScaleImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import ReviewCard from 'components/organisms/Reviewcard'
import ShopCard from 'components/organisms/Shopcard'
import Layout from 'components/templates/Layout'
import getCampaigns from 'services/campaigns/getcampaigns'
import getReviews from 'services/reviews/getreviews'
import getShops from 'services/shops/get-shops'
import { ApiContext, Shop, Review, Campaign } from 'types'

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<HomeProps> = ({
  SummaryShop,
  Reviews,
  Campaigns,
}: HomeProps) => {
  const renderShop = (Shops: Shop[]) => {
    return Shops.map((s: Shop, i: number) => (
      <Box paddingLeft={i === 0 ? 0 : 2} key={s.id}>
        <Link href={`/shops/${s.id}`} passHref>
          <ShopCard
            shopname={s.shopname}
            category={s.category}
            shopImageUrl={s.shopImageUrl}
            description={s.description}
          />
        </Link>
      </Box>
    ))
  }
  const renderReview = (Reviews: Review[]) => {
    return Reviews.map((r: Review) => (
      <Box key={r.id}>
        <ReviewCard name={r.name} star={r.star} comment={r.comment} />
      </Box>
    ))
  }

  const renderCampaign = (Campaigns: Campaign[]) => {
    const sizewidth = { base: '480px' }
    const sizeheight = { base: '240px' }
    return Campaigns.map((c: Campaign) => (
      <Box key={c.id}>
        <Link href={`/campaign/${c.id}`} passHref>
          <ScaleImage
            src={c.campaignImageUrl}
            width={480}
            height={240}
            containerWidth={sizewidth}
            containerHeight={sizeheight}
            objectFit="cover"
            alt={'表示できてないよ～'}
          />
        </Link>
      </Box>
    ))
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
              レストランリサーチャー
            </Text>
            <Text as="h1" marginTop={0} color="white" variant="extraLarge">
              あなたの生活のシナジーに
            </Text>
          </Box>
          <Box width="100%">{renderCampaign(Campaigns)}</Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: '100%', md: '1040px' }}
        >
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              お店の情報
            </Text>
            {renderShop(SummaryShop)}
          </Box>
          <Text as="h2" variant="large">
            レビュー
          </Text>
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
  const [SummaryShop, Reviews, Campaigns] = await Promise.all([
    getShops(context),
    getReviews(context),
    getCampaigns(context),
  ])
  return {
    props: {
      SummaryShop,
      Reviews,
      Campaigns,
    },
  }
}

export default Home
