import React, { useState } from 'react'


import { NavigationContainer } from '@react-navigation/native'

// Component

import Routes from './src/Routes'
import { View , Text} from 'react-native'

export default function App() {

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}