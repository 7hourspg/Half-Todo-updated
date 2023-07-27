import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import TaskAllRoute from './TaskAllRoute';
const { width: width, height: height } = Dimensions.get('screen');

const Personal = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TaskAllRoute navigation={navigation} backgroundColor={true} />
        <View style={styles.Route}>
          <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
            <Text>Personal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Personal;
const styles = StyleSheet.create({
  container: {
 
    flex: 1,
  },
  Route: {
    width,
    // backgroundColor:'white',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
});
