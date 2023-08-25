import { View, Text } from 'react-native'
import React from 'react'
import { Stack, withLayoutContext } from 'expo-router';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewTweet from '../new-tweet';
import Bookmarks from './bookmarks';
import TwitterBlue from './twitter-blue';


export default function DrawerLayout() {
  const Drawer = createDrawerNavigator();
  // const Drawer = withLayoutContext(DrawerNavitor)
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bookmark" component={Bookmarks} />
      <Drawer.Screen name="Twitter" component={TwitterBlue} />
    </Drawer.Navigator>
  )
}