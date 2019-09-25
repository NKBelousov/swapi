import { mapValues } from 'lodash'

import { sizes, devices } from './media'

describe('media', () => {
  test('should have breakpoint for every size', () => {
    expect(devices).toEqual({
      ...mapValues(sizes, () => expect.any(String))
    })
  })
})