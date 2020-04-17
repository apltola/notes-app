import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';
import { iosColors } from '../util/globalStyles';

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={{flex: 1}}>
      <Button title="Add post" onPress={addBlogPost} />

      <FlatList
        style={styles.list}
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.blogPost}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.blogTitle}>
                  {item.title} - {item.id}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <MaterialIcons name="delete-forever" style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          )
        }}
      />
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
});

export default IndexScreen;