import React from 'react'
import { mount } from 'enzyme'

import MahiSummary from '../../../client/components/MahiSummary'

describe('<MahiSummary /> component tests', () => {
  it('renders props', () => {
    const expectedProps ={
      title: 'I need to learn French',
      category: 'Language',
      hours: 6,
      description: 'I know some basic phrases and want to become an expert at conversing in french.',
      assigner: 'Te Piha Niha',
      image: '/images/avatar01.png'
    }
    const component = mount(<MahiSummary match={{ params:expectedProps }} />)
    expect(component.find('#title').text()).toMatch(expectedProps.title)
  })
})
