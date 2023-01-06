import { Inter } from '@next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'

const inter = Inter({ subsets: ['latin'] })
const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`


export default function Home() {
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
    </Layout>
  )
}
