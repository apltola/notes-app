import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { iosColors } from '../util/globalStyles';
import { Context } from '../context/BlogContext';

const EditBlogScreen = ({ navigation, route }) => {
  const { id } = route.params.blog;
  const { state, editBlogPost } = useContext(Context)
  const blog = state.find(post => post.id === id);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.title} />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput value={content} onChangeText={text => setContent(text)} style={styles.content} />

      <Button
        title="Save Note"
        onPress={() => editBlogPost(blog.id, title, content, () => {
          navigation.pop();
        })}
      />

      <Text>
        {JSON.stringify(blog, null, 2)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  label: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  title: {
    borderColor: iosColors.grey,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  content: {
    borderColor: iosColors.grey,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
});

export default EditBlogScreen;