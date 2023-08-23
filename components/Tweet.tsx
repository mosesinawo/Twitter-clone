import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { TweetType } from '../types';
import { Entypo, EvilIcons } from '@expo/vector-icons';


type TweetProps = {
  tweet: TweetType;
}
type IconButtonProps = {
  icon:React.ComponentProps<typeof EvilIcons>['name'];
  text?:number | string;
}


const Tweet = ({ tweet }: TweetProps) => {

  const IconWrapper = () => {
    return (
      <View style={styles.footer}>
        <IconButton icon="comment" text={tweet.numberOfComments} />
        <IconButton icon="retweet" text={tweet.numberOfRetweets} />
        <IconButton icon="heart" text={tweet.numberOfLikes} />
        <IconButton icon="chart" text={tweet.impressions || 0} />
        <IconButton icon="share-apple"  />
      </View>
    )
  }

  const IconButton = ({ text, icon }:IconButtonProps) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <EvilIcons name={icon} size={22} color="gray" />
        <Text style={{ fontSize: 12, color: 'gray' }}>{text}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username} &nbsp;.2h</Text>
          {/* <Text style={styles.name}>.2h</Text> */}
          <Entypo name="dots-three-horizontal" size={16} color="gray"
            style={{ marginLeft: 'auto' }} />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && <Image source={{ uri: tweet.image }} style={styles.image} />}

        <IconWrapper />
      </View>
    </View>
  )
}

export default Tweet

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600'
  },
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-around'
  }
});