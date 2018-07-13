import { shallow } from 'enzyme'

import React from 'react'

import {Found} from '../../../client/components/Found.jsx'
import {FoundPet} from '../../../client/components/FoundPet.jsx'

const dummyFoundPets = [
  {
      id: 1,
      species: 'Dog',
      photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg',
      user_id: 1
  },
  {
      id: 2,
      species: 'Cat',
      photo: 'https://www.thehappycatsite.com/wp-content/uploads/2017/09/oil.jpg',
      user_id: 4
  },
  {
      id: 3,
      species: 'Fish',
      photo: 'https://r.hswstatic.com/w_907/gif/goldfish-alcohol.jpg',
      user_id: 2
  }
]

describe('Found component', () => {
  const wrapper = shallow(
    <Found foundPets={dummyFoundPets}/>
  )
  it('renders', () => {
    expect(wrapper).toBeDefined()
  });
  it('has appropriate number of child columns', () => {
    expect(wrapper.find('FoundPet')).toHaveLength(3)
  })
})

describe('FoundPet Component', () => {
  const wrapper = shallow(
    <FoundPet pet={dummyFoundPets[0]}/>
  )
  it('renders', () => {
    expect(wrapper).toBeDefined()
  })
  it('has species, photo and owner id', () => {
    expect(wrapper.find('.pet-name')).toBeDefined()
    expect(wrapper.find('.pet-species')).toBeDefined()
    expect(wrapper.find('figure')).toBeDefined()
  })
})