import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '..'

storiesOf(`Button`, module).add(`Default`, () => (
  <Button variant={'primary'} label={'primary'} size={'lg'} />
))
