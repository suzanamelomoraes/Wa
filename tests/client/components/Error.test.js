import React from 'react'
import { mount } from 'enzyme'
import { Message } from 'semantic-ui-react'

import { Error } from '../../../client/components/Error'

describe('Error component tests', () => {
  it('renders Message if error is not null', () => {
    const error = 'an error'
    const component = mount(<Error error={error}/>)

    const actual = component.containsMatchingElement(Message)
    expect(actual).toBeTruthy()
  })
  it('does not render Message if error is null', () => {
    const error = null
    const component = mount(<Error error={error}/>)

    const actual = component.containsMatchingElement(Message)
    expect(actual).toBeFalsy()
  })

})
