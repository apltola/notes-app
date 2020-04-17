import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const BlogScreen = ({ route, navigation }) => {
  const { id } = route.params.blog;
  const { state } = useContext(Context);
  const blog = state.find(post => post.id === id);


  navigation.setOptions({
    headerRightContainerStyle: { paddingRight: 10 },
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { blog })}>
        <MaterialIcons name="edit" size={25} />
      </TouchableOpacity>
    ),
  });

  /* React.useLayoutEffect(() => {
  }, [navigation, blog]); */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {blog.title}
      </Text>
      <Text style={styles.content}>
        {blog.content}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  content: {
    fontSize: 16,
  }
});

export default BlogScreen;