import { View, Text } from 'react-native'
import React from 'react'
import Tweet from '../../components/Tweet'
import tweets from '../../assets/data/tweets'
import {useLocalSearchParams} from 'expo-router'

const TweetScreen = () => {
  const {id} = useLocalSearchParams()
  const tweet = tweets.find((t) => t.id === id)
  if(!tweet){
    return<Text>Tweet {id} not found!</Text>
  }
  
  return (
    <View>
      <Tweet tweet={tweet} />
    </View>
  )
}

export default TweetScreen