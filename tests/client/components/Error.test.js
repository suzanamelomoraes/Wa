import React from 'react'
import { mount } from 'enzyme'
import { Message } from 'semantic-ui-react'

import { Error } from '../../../client/components/Error'

describe('Error component tests', () => {
  it('renders Message component if error', () => {
    const error = 'an error'
    const component = mount(<Error error={error}/>)

    const actual = component.containsMatchingElement(Message)
    expect(actual).toBeTruthy()
  })
})
