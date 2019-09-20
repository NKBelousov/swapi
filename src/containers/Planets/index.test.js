import React from 'react'
import ReactDOM from 'react-dom'

import * as statuses from '~/constants/statuses'

import Planets from './index'

describe('Planets', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
  })
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
  })

  Object.values(statuses).map(status => {
    it(`should render status "${status}" without crashing`, () => {
      ReactDOM.render(<Planets
        data={{
          data: [],
          status: status
        }}
        onRequest={jest.fn()}
      />, div)
    })
  })
})