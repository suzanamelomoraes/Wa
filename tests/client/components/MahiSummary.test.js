import React from 'react'
import { mount } from 'enzyme'

import { MahiSummary } from '../../../client/components/MahiSummary'

const expectedProps = {
  title: 'I need to learn French',
  category: 'Language',
  hours: 6,
  description: 'I know some basic phrases and want to become an expert at conversing in french.',
  assigner: 'Te Piha Niha',
  image: '/images/avatar01.png'
}

describe('<MahiSummary /> component tests', () => {
  it('renders title from props', () => {
    const component = mount(
      <MahiSummary { ...expectedProps } />)
    expect(component.find('h1#mahiTitle').text()).toMatch(expectedProps.title)
  })
  it('renders category from props', () => {
    const component = mount(<MahiSummary { ...expectedProps } />)
    expect(component.find('h3#mahiCategory').text()).toMatch('Category')
  })
  it('renders the description from props', () => {
    const component = mount(<MahiSummary {... expectedProps } />)
    expect(component.find('div#mahiDescription').text()).toBeTruthy()
    expect(component.find('div#mahiDescription').text()).toMatch(expectedProps.description)
  })
  it('renders the description from props', () => {
    const component = mount(<MahiSummary {... expectedProps } />)
    expect(component.find('span#mahiHours').text()).toMatch(expectedProps.hours + ' hours')
  })
})
