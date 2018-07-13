import { shallow } from 'enzyme'

import React from 'react'

import {LostForm} from '../../../client/components/LostForm.jsx'

describe('LostForm component', () => {
  const wrapper = shallow(
    <LostForm />
  )
  it('renders', () => {
    expect(wrapper).toBeDefined()
  });
  it('has 4 fields', () => {
    expect(wrapper.find('.field')).toHaveLength(4)
  })
})