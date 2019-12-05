import React from 'react'
import { mount } from 'enzyme'

import { AddMahi } from '../../../client/components/AddMahi'

const categories = [
  { key: 'af', id: 1, categoryName: 'Afghanistan' },
  { key: 'ax', id: 2, categoryName: 'Aland Islands' },
  { key: 'al', id: 3, categoryName: 'Albania' },
  { key: 'dz', id: 4, categoryName: 'Algeria' },
  { key: 'as', id: 5, categoryName: 'American Samoa' },
  { key: 'ad', id: 6, categoryName: 'Andorra' }
]

describe('<Add Mahi /> component tests', () => {
  it('contains renders a button that can be clicked to add mahi', () => {
    const component = mount(
      <AddMahi categories={categories} />
    )
    expect(component.find('button#addMahi').text()).toMatch('Add Mahi')
    expect(component.state('modalVisible')).toBe(false)
  })
  it('should update the state of title on change', () => {
    const component = mount(
      <AddMahi categories={categories} />
    )
    const button = component.find('button#addMahi')
    button.simulate('click')
    const input = component.find('input#mahiTitle')
    input.instance().value = 'Fix my car'
    input.simulate('change')
    expect(component.state('title')).toMatch('Fix my car')
    expect(component.state('modalVisible')).toBe(true)
  })
  it('should update the state of description on change', () => {
    const component = mount(
      <AddMahi categories={categories} />
    )
    const button = component.find('button#addMahi')
    button.simulate('click')
    const input = component.find('textarea#mahiDescription')
    input.instance().value = 'My car needs an oil change'
    input.simulate('change')
    expect(component.state('description')).toMatch('My car needs an oil change')
  })
  it('should update the state of time on change', () => {
    const component = mount(
      <AddMahi categories={categories} />
    )
    const button = component.find('button#addMahi')
    button.simulate('click')
    const input = component.find('input#time')
    input.instance().value = '7'
    input.simulate('change')
    expect(component.state('time')).toMatch('7')
  })
  it('should change the state of modalVisible to false', () => {
    const component = mount(
      <AddMahi categories={categories} />
    )
    const button = component.find('button#addMahi')
    button.simulate('click')
    expect(component.find('button#submit').text()).toMatch('Add Mahi')
  })
})
