import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../../../client/components/Home'
import { Grid, Container, Header } from 'semantic-ui-react'

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Test <Home /> component (Shallow)', () => {
  it('Renders our <Grid /> (mount)', () => {
    // Arrange
    const wrapper = mount(<Home />)
    const childComponent = Grid
    const expected = true

    // Act
    const actual = wrapper.containsMatchingElement(childComponent)

    // Assert
    expect(actual).toBe(expected)
  })

  it('Renders our <Header />', () => {
    // Arrange
    const wrapper = mount(<Home />)
    const childComponent = Header
    const expected = true

    // Act
    const actual = wrapper.containsMatchingElement(childComponent)

    // Assert
    expect(actual).toBe(expected)
  })

  it('Renders our <Container />', () => {
    // Arrange
    const wrapper = mount(<Home />)
    const childComponent = Container
    const expected = true

    // Act
    const actual = wrapper.containsMatchingElement(childComponent)

    // Assert
    expect(actual).toBe(expected)
  })

  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
