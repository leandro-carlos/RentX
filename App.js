import React, { useState } from 'react'


import { NavigationContainer } from '@react-navigation/native'

// Component

import Routes from './src/Routes'

export default function App() {

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}