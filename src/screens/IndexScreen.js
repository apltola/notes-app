import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

  useEffect(() => {
    //getBlogPosts();

    const unsubscribe = navigation.addListener('focus', () => {
      console.log('INDEX FOCUS!!!');
      getBlogPosts();
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{flex: 1}}>
      {state.length > 0 ?
        <FlatList
          style={styles.list}
          data={state}
          keyExtractor={post => post.title}
          renderItem={({ item }) => {
            return (
              <View style={styles.blogPost}>
                <View style={{justifyContent: 'center'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Blog', { blog: item })}>
                    <Text style={styles.blogTitle}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialIcons name="delete-forever" style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      
        : <Text style={styles.noPosts}>· No notes ·</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
  blogPost: {
    //borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  deleteIcon: {
    alignSelf: 'center',
    //color: iosColors.red,
    fontSize: 35
  },
  blogTitle: {
    //borderWidth: 1,
    borderColor: 'red',
    fontSize: 18,
  },
  noPosts: {
    //borderWidth: 1,
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  }
});

export default IndexScreen;