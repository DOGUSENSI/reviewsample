import styled from 'styled-components'
import { StarIcon } from 'components/atoms/IconButton'
import ScaleImage from 'components/atoms/ScaleImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface ReviewProps {
  //投稿者の名前
  name: string
  //評価
  star: number
  //コメント
  comment: string
}

// 商品カードのコンテナ
const ReviewCardContainer = styled.div``

/**
 * 商品カード
 */

const ReviewCard = ({ name, star, comment }: ReviewProps) => {
  const Stars = (num_star: number) => {
    return [...Array(Number(num_star))].map((i: number) => (
      <StarIcon key={i} color="star" />
    ))
  }
  return (
    <ReviewCardContainer>
      <Flex flexDirection="column">
        <Text as="span" variant="large">
          {name}
        </Text>
        <Box border="thick double #c1d7c4">
          <Flex justifyContent="left" marginTop={0}>
            <Text as="span" variant="medium" color="black">
              評価:
            </Text>
            {Stars(star)}
          </Flex>
          <br />
          <Text as="span" variant="small" marginTop={2}>
            {comment}
          </Text>
        </Box>
      </Flex>
    </ReviewCardContainer>
  )
}

export default ReviewCard
