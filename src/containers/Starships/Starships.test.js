import React from 'react'
import ReactDOM from 'react-dom'

import * as statuses from '~/constants/statuses'

import Starships from './index'

describe('Starships', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
  })
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
  })

  Object.values(statuses).map(status => {
    it(`should render status "${status}" without crashing`, () => {
      ReactDOM.render(<Starships
        data={{
          data: [],
          status: status
        }}
        onRequest={jest.fn()}
      />, div)
    })
  })
})