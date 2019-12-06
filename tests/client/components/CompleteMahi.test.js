import CompleteMahi from '../../../client/components/CompleteMahi'
import { mount } from 'enzyme'
import { Button } from 'semantic-ui-react'
import React from 'react'

test('truthy test', () => {
  expect(true).toBeTruthy()
})

describe('<CompleteMahi /> component test', () => {
  it('Contains <Button/>', () => {
    // Arrange
    const wrapper = mount(<CompleteMahi/>)
    console.log(wrapper)
    const childComponent = Button
    const expected = true

    // Act
    const actual = wrapper.containsMatchingElement(childComponent)

    // Assert
    expect(actual).toBe(expected)
  })
})
