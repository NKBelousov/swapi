import React from 'react'
import ReactDOM from 'react-dom'

import * as modes from '~/constants/modes'

import Films from './index'

describe('Films', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
  })
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
  })

  Object.values(modes).map(mode => {
    it(`should render mode "${mode}" without crashing`, () => {
      ReactDOM.render(<Films
        data={{
          data: [],
          status: mode
        }}
        onRequest={jest.fn()}
      />, div)
    })
  })
})