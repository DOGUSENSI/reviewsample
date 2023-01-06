import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useEffect } from 'react'
import Header from './index'
/*import { AuthContextProvider } from 'contexts/AuthContext'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from 'contexts/ShoppingCartContext'*/

export default { title: 'organisms/Header' } as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header />
export const SearchBadgeIcon = Template.bind({})
