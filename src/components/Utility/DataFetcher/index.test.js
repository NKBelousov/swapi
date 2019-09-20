import React from 'react'
import ReactDOM from 'react-dom'
import * as Statuses from '~/constants/statuses'

import DataFetcher from './'

describe('DataFetcher', () => {
  test.each(Object.values(Statuses))(`should render %p without crashing`, status => {
    const div = document.createElement('div')
    ReactDOM.render(<DataFetcher data={{
      status,
      data: ['Test'],
    }}
      onRequest={jest.fn()}
    >
      {data => data}
    </DataFetcher>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})