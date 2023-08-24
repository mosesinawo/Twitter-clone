import { StyleSheet, FlatList, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import Tweet from '../../components/Tweet';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />} />

      <Link href="/new-tweet" asChild>
        <Pressable style={styles.floatingButton}>
          <Entypo name='plus' size={24} color="white" />
        </Pressable>

      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  floatingButton: {
    backgroundColor: '#1C9BF0',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});
