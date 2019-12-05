import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../../../client/components/Home'

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Test <Home /> component (Shallow)', () => {
  it('Renders our <Grid />', () => {
    const expected = '<Grid />'
    const wrapper = shallow(<Home />)
    const actual = wrapper.text()

    expect(actual).toMatch(expected)
  })
  it('Renders our <Header />', () => {
    const expected = '<Header />'
    const wrapper = shallow(<Home />)
    const actual = wrapper.text()

    expect(actual).toMatch(expected)
  })
  it('Renders our <Container />', () => {
    const expected = '<Container />'
    const wrapper = shallow(<Home />)
    const actual = wrapper.text()

    expect(actual).toMatch(expected)
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
