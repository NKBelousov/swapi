import { createSelector } from 'reselect'

export default function createEntitySelector(entityKey) {
  return createSelector([state => state[entityKey]], data => ({ data }))
}