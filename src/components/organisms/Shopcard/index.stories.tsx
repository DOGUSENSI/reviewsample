import { ComponentMeta, ComponentStory } from '@storybook/react'
import ShopCard from './index'

export default {
  title: 'Organisms/ShopCard',
  argTypes: {
    shopname: {
      control: { type: 'text' },
      description: '店名',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: { type: 'text' },
      description: '店の説明',
      table: {
        type: { summary: 'string' },
      },
    },
    category: {
      control: { type: 'text' },
      description: 'カテゴリー',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof ShopCard>

const Template: ComponentStory<typeof ShopCard> = (args) => (
  <ShopCard {...args} />
)

// Smallカード
export const Small = Template.bind({})
Small.args = {
  shopname: 'テストバーガー',
  shopImageUrl: '/images/sample/1.jpg',
  category: 'ハンバーガー',
  description: 'テストなハンバーガーショップです',
}
