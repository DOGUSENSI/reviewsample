import Link from 'next/link'
import styled from 'styled-components'
import { GitHubIcon } from 'components/atoms/IconButton'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

/**
 * フッター
 */
const Footer = () => {
  return (
    <footer>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor>トップ</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor>採用</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor>お知らせ</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor>利用規約</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor>プライバシーポリシー</Anchor>
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                <Anchor>企業情報</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ base: '100%', md: '120px' }}>
          <nav>
            <Anchor
              as="a"
              href="https://github.com/DOGUSENSI/reviewsample"
              target="_blank"
            >
              <GitHubIcon size={22} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box paddingTop={3} paddingBottom={2}>
        <Text>このWebサイトはGijutsuhyoronsha Co., Ltd..らの著作物をベースに作成されました</Text>
      </Box>
    </footer>
  )
}

export default Footer
