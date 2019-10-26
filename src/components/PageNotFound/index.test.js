import React from 'react'
import ReactDOM from 'react-dom'

import PageNotFound from './index'

describe('PageNotFound', () => {
  it(`should render without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<PageNotFound />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})