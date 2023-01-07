import { ComponentMeta, ComponentStory } from '@storybook/react'
import ReviewCard from './index'

export default {
  title: 'Organisms/ReviewCard',
  argTypes: {
    name: {
      control: { type: 'text' },
      description: '投稿者名',
      table: {
        type: { summary: 'string' },
      },
    },
    star: {
      control: { type: 'number' },
      description: '星の数',
      table: {
        type: { summary: 'number' },
      },
    },
    comment: {
      control: { type: 'text' },
      description: 'コメント',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof ReviewCard>

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
)

// Smallカード
export const Small = Template.bind({})
Small.args = {
  name: '太郎',
  star: 3,
  comment: 'まぁまぁかな',
}
