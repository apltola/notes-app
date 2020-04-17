import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { iosColors } from '../util/globalStyles';
import { Context } from '../context/BlogContext';

const CreateBlogScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.title} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput value={content} onChangeText={text => setContent(text)} style={styles.content} />

      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
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

export default CreateBlogScreen;