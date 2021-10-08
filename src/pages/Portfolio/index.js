import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Mobile from './Mobile'
import Desktop from './Desktop'

export default function Porfolio() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isMobileScreen = useMemo(() => windowWidth <= 500, [windowWidth])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return <>{isMobileScreen ? <Mobile /> : <Desktop />}</>
}
