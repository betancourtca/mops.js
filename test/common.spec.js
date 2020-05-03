'use strict'
const Common = require('@space-janitor/common-js')

describe('Logging Test', () => {
  it('Initialize should succeed', () => {
    Common.initialize().then(() => {
      expect(true)
    })
  })
  it('Initialize should fail', () => {
    Common._config = null
    Common.initialize({}).catch((err) => {
      expect(err).toBeDefined()
    })
  })
  it('Clonned objects match', () => {
    const a = { test: { test: 'hello' } }
    const b = Common.clone(a)
    expect(b).toEqual(a)
  })
})
