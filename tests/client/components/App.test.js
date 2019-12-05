import React from 'react'
import { mount } from 'enzyme'

import App from '../../../client/components/App'
import Nav from '../../../client/components/Nav'
import Home from '../../../client/components/Home'
import { Listing } from '../../../client/components/Listing'

describe('<App /> component tests', () => {
  it('contains <Nav /> (mount)', () => {
    // Arrange
    const expected = true
    // Act
    const wrapper = mount(<App />)
    const actual = wrapper.containsMatchingElement(Nav)
    // Assert
    expect(actual).toBe(expected)
  })
  it('contains <Home /> (mount)', () => {
    // Arrange
    const expected = true
    // Act
    const wrapper = mount(<App />)
    const actual = wrapper.containsMatchingElement(Home)
    // Assert
    expect(actual).toBe(expected)
  })
  it('contains <Listing /> (mount)', () => {
    // Arrange
    const expected = true
    // Act
    const wrapper = mount(<App />)
    const actual = wrapper.containsMatchingElement(Listing)
    // Assert
    expect(actual).toBe(expected)
  })
})
