import React from 'react';

import { Text, View, ActivityIndicator } from 'react-native';

const requestStatus = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
};

export default function RegisterScreen() {
  const [student, setStudents] = React.useState([]);

  React.useEffect(() => {
    //fetch data student
  }, []);
  const [status, setStatus] = React.useState(requestStatus.LOADING);
  return (
    <View>
      {status === 'LOADING' && <ActivityIndicator size="small" color="red" />}
      {status === 'SUCCESS' && <Text>hello walid</Text>}
    </View>
  );
}
