import React from 'react'
import ReactDOM from 'react-dom'

import Film from './index'

describe('Film', () => {
  it(`should render without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<Film />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})