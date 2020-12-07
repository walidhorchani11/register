import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import axios from 'axios';

const requestStatus = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

function StudentsList() {

  const [student, setStudents] = React.useState([]);
  const [status, setStatus] = React.useState(requestStatus.

  React.useEffect(() => {
    //fetch data student
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/students');
        const data = response.json();
        setStatus(requestStatus.SUCCESS)
      } catch (error) {
        setStatus(requestStatus.ERROR);
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>component List of students</Text>
    </View>
  );
}

export default StudentsList;
