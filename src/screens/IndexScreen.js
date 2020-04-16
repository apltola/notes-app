import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <TouchableOpacity onPress={addBlogPost}>
        <Text>Add post</Text>
      </TouchableOpacity>

      <FlatList
        data={state}
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