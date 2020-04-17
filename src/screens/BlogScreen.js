import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogScreen = ({ route }) => {
  const { blog } = route.params

  return (
    <View>
      <Text>
        {JSON.stringify(blog)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default BlogScreen;