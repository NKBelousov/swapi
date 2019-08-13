import React from 'react'
import ReactDOM from 'react-dom'

import Starship from './index'

describe('Starship', () => {
  it(`should render without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<Starship />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})