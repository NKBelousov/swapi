import React from 'react'
import ReactDOM from 'react-dom'

import * as statuses from '~/constants/statuses'

import Films from './index'

describe('Films', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
  })
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
  })

  Object.values(statuses).map(status => {
    it.skip(`should render status "${status}" without crashing`, () => {
      ReactDOM.render(<Films
        data={{
          data: [],
          status: status
        }}
        onRequest={jest.fn()}
      />, div)
    })
  })
})