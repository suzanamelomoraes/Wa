import React from 'react'
import { Loader } from 'semantic-ui-react'
import { mount } from 'enzyme'

import { Loading } from '../../../client/components/Loading'

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Loading component tests', () => {
  it('component renders if pending = true', () => {
    const component = mount(<Loading load={true}/>)
    const actual = component.containsMatchingElement(Loader)
    expect(actual).toBeTruthy()
  })

  it('component does not render if pending = false', () => {
    const component = mount(<Loader load={''}/>)
    const actual = component.containsMatchingElement(Loader)
    expect(actual).toBeFalsy()
  })
})
