import createEntitySelector from "./createEntitySelector"

describe('[helpers] createEntitySelector', () => {
  it('should create selector based on entity key', () => {
    const state = {
      app: {
        data: [1, 2, 3],
        status: 'success'
      }
    }

    expect(createEntitySelector('app')(state)).toEqual({
      data: state.app
    })
  })
})