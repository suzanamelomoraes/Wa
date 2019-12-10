import React from 'react'
import { mount } from 'enzyme'

import { Card, Icon, Image, Table, Header, Segment } from 'semantic-ui-react'

import { Profile } from '../../../client/components/Profile'

const userProps = {
  name: 'Steve Jobs',
  image: '/images/avatar02.png',
  about: 'Coding Enthusiast',
  mobile: '021 456 4445',
  email: 'steve.jobs@apple.com',
  address: '12 Morgan Street, Newmarket, Auckland, NewZealand'
}

const offerings = [
  {
    id: 2,
    balance: 5
  },
  { id: 3,
    balance: 5
  }
]

describe('Renders Components', () => {
  it('Renders segment component', () => {
    const component = mount(<Profile offerings={offerings} user={userProps}/>)
    expect(component.containsMatchingElement(Segment)).toBe(true)
  })
  it('Renders card component', () => {
    const component = mount(<Profile offerings={offerings} user={userProps}/>)
    expect(component.containsMatchingElement(Card)).toBe(true)
  })
  it('Renders segment component', () => {
    const component = mount(<Profile offerings={offerings} user={userProps}/>)
    expect(component.containsMatchingElement(Icon)).toBe(true)
  })
  it('Renders segment component', () => {
    const component = mount(<Profile offerings={offerings} user={userProps}/>)
    expect(component.containsMatchingElement(Image)).toBe(true)
  })
  it('Renders segment component', () => {
    const component = mount(<Profile offerings={offerings} user={userProps}/>)
    expect(component.containsMatchingElement(Table)).toBe(true)
  })
  it('Renders segment component', () => {
    const component = mount(<Profile offerings={offerings} user={userProps}/>)
    expect(component.containsMatchingElement(Header)).toBe(true)
  })
})
