/// <reference types="cypress" />
// unit test!
import {addOne} from './addOne'
describe('addOne', () => {
  it('adds 1', () => {
    expect(addOne(1)).to.equal(2)
  })
})
