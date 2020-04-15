import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>index_sreeeeen</Text>
      <TouchableOpacity onPress={addBlogPost}>
        <Text>Add post</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.title}
            </Text>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default IndexScreen;