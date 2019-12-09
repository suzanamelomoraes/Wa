import React from 'react'
import { mount } from 'enzyme'
import { Button, Form, Dropdown } from 'semantic-ui-react'

import { Registration } from '../../../client/components/Registration'

describe('<Registration /> component tests', () => {
  it('contains a Form Element', () => {
    const component = mount(
      <Registration />
    )
    expect(component.containsMatchingElement(Form)).toBe(true)
  })
})
