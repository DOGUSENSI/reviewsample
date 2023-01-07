import styled from 'styled-components'
import ScaleImage from 'components/atoms/ScaleImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface ShopProps {
  //店の名前
  shopname: string
  //店のイメージUrl
  shopImageUrl: string
  //店のカテゴリー
  category: string
  //店の説明
  description: string
}

// 商品カードのコンテナ
const ShopCardContainer = styled.div`
  position: relative;
`

// 商品カード画像のコンテナ
const ShopCardImageContainer = styled.div`
  z-index: 99;
`

// 商品カードの情報
const ShopCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`

/**
 * 商品カード
 */
const ShopCard = ({
  shopname,
  shopImageUrl,
  category,
  description,
}: ShopProps) => {
  const { size, imgSize } = { size: { base: '240px' }, imgSize: 240 }

  return (
    <ShopCardContainer>
      <Flex justifyContent="center">
        <ShopCardImageContainer>
          <ScaleImage
            src={shopImageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
            alt={'表示できてないよ～'}
          />
        </ShopCardImageContainer>
        <Box marginTop={1} marginLeft={1}>
          <Text as="h2" variant="medium" margin={0} padding={0}>
            {shopname}
          </Text>
          <Text as="p" variant="medium">
            ジャンル:{category}
          </Text>
          <Text as="span" variant="medium">
            {description}
          </Text>
        </Box>
      </Flex>
    </ShopCardContainer>
  )
}

export default ShopCard
