import React from 'react';

import { Text, View, ActivityIndicator } from 'react-native';



export default function RegisterScreen() {
LOADING);
  return (
    <View>
      {status === 'LOADING' && <ActivityIndicator size="small" color="red" />}
      {status === 'SUCCESS' && <Text>hello walid</Text>}
    </View>
  );
}
