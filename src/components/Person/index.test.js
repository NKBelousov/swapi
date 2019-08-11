import React from 'react'
import ReactDOM from 'react-dom'

import Person from './index'

describe('Person', () => {
  it(`should render mode without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<Person />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})