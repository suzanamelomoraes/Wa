import CompleteMahi from '../../../client/components/CompleteMahi'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { Button, Header, Image, Modal, Form, Icon } from 'semantic-ui-react'

test('truthy test', () => {
  expect(true).toBeTruthy()
})

describe('<CompleteMahi /> component test', () => {
  it('Contains <Button/>', () => {
    // Arrange
    const wrapper = mount(<CompleteMahi/>)
    const childComponent = Button
    const expected = true

    // Act
    const actual = wrapper.containsMatchingElement(childComponent)

    // Assert
    expect(actual).toBe(expected)
  })
  it('When Button is clicked, state.showModal changes from false to true', () => {
    // Arrange
    const component = mount(<CompleteMahi/>)
    const button = component.find('button')

    // Act
    const beforeShowModal = component.instance().state.showModal
    button.simulate('click')
    const afterShowModal = component.instance().state.showModal

    // Assert
    expect(beforeShowModal).toBe(false)
    expect(afterShowModal).toBeTruthy()
  })
  it("When popup's buttons are clicked state.showModal becomes false", () => {
    // Arrange
    const component = mount(<CompleteMahi/>)
    const firstButton = component.find('button[data-test="firstBtn"]')

    // Act
    firstButton.simulate('click')
    const state1 = component.instance().state.showModal
    const modalButtons = component.find('button[data-test="secondBtn"]')
    modalButtons.simulate('click')

    const state2 = component.instance().state.showModal

    // Assert
    expect(state1).toBe(true)
    expect(state2).toBe(false)
  })
})
