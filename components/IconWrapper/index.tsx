import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import IconButton from '../IconButton'
import tweets from '../../assets/data/tweets'
import { TweetType } from '../../types'

type TweetProps = {
    tweet: TweetType;
  }

const IconWrapper = ({tweet}: TweetProps) => {
    return (
        <View style={styles.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets} />
            <IconButton icon="heart" text={tweet.numberOfLikes} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
            <IconButton icon="share-apple" />
        </View>
    )
}

export default IconWrapper

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-around'
    }
})

