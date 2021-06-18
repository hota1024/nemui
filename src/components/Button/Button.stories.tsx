import React from 'react'
import { Meta, Story } from '@storybook/react'
import { NemuiProvider } from '@/contexts/NemuiContext'
import { CssBaseline } from '../CssBaseline/CssBaseline'
import { Button } from './Button'
import { ButtonProps } from './ButtonProps'

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <NemuiProvider>
        <CssBaseline />
        {Story()}
      </NemuiProvider>
    ),
  ],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'warning', 'error'],
      },
    },
    shadow: {
      control: {
        type: 'number',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outlined', 'text'],
      },
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Default</Button>
)

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args} color="primary">
    Primary
  </Button>
)

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args} color="secondary">
    Secondary
  </Button>
)

export const Warning: Story<ButtonProps> = (args) => (
  <Button {...args} color="warning">
    Warning
  </Button>
)

export const Error: Story<ButtonProps> = (args) => (
  <Button {...args} color="error">
    Error
  </Button>
)
