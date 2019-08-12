import React from 'react'
import ReactDOM from 'react-dom'

import Planet from './index'

describe('Planet', () => {
  it(`should render without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<Planet />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})