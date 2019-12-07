import React from 'react'
import { mount } from 'enzyme'

import { Listing } from '../../../client/components/Listing'
import MahiSummary from '../../../client/components/MahiSummary'

describe('<Listing /> component tests', () => {
  it('contains <MahiSummary /> (mount)', () => {
    const expected = true
    const wrapper = mount(<Listing />)

    wrapper.setState({
      mahiDetails: [{
        taskId: 1,
        name: 'Fix my headlight',
        category_name: 'Automotive',
        description: 'Toyota Civic 2013, left headlight is broken. Might be electrical connection?',
        assigner_name: 'Andria',
        assignee_name: null,
        status: 'open',
        time: 3
      }]
    })

    const actual = wrapper.containsMatchingElement(MahiSummary)
    expect(actual).toBe(expected)
  })
})
