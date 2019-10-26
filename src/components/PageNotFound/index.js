import React, { memo, useEffect } from 'react'

import { PEOPLE } from '~/constants/routes'

const PageNotFound = memo(({ history }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      history.push(PEOPLE)
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return <div>
    <h1>This is not the page you are looking for...</h1>
    <h2>Redirecting...</h2>
  </div>
})

PageNotFound.displayName = 'PageNotFound'

export default PageNotFound