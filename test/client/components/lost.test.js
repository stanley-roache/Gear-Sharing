import { shallow } from 'enzyme'

import React from 'react'

import {Lost} from '../../../client/components/Lost.jsx'
import {LostPet} from '../../../client/components/LostPet.jsx'

const dummyLostPets = [
  {
      id: 1,
      name: 'Frodo',
      species: 'Dog',
      photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg',
      user_id: 1
  },
  {
      id: 2,
      name: 'Bilbo',
      species: 'Cat',
      photo: 'https://www.thehappycatsite.com/wp-content/uploads/2017/09/oil.jpg',
      user_id: 4
  },
  {
      id: 3,
      name: 'Gamgee',
      species: 'Fish',
      photo: 'https://r.hswstatic.com/w_907/gif/goldfish-alcohol.jpg',
      user_id: 2
  }
]

describe('Lost component', () => {
  const wrapper = shallow(
    <Lost lostPets={dummyLostPets}/>
  )
  it('renders', () => {
    expect(wrapper).toBeDefined()
  });
  it('has appropriate number of child columns', () => {
    expect(wrapper.find('LostPet')).toHaveLength(3)
  })
})

describe('LostPet Component', () => {
  const wrapper = shallow(
    <LostPet pet={dummyLostPets[0]}/>
  )
  it('renders', () => {
    expect(wrapper).toBeDefined()
  })
  it('has name, species and owner id', () => {
    expect(wrapper.find('.pet-name')).toBeDefined()
    expect(wrapper.find('.pet-species')).toBeDefined()
    expect(wrapper.find('.pet-owner')).toBeDefined()
  })
})