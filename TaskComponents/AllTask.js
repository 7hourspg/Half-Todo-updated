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

const AllTask = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <TaskAllRoute navigation={navigation} backgroundColor={'red'} />
        <View style={styles.Route}>
          <Text>All</Text>
        </View>
      </View>
    </>
  );
};

export default AllTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height
  },
  Route: {
    width,
    // backgroundColor:'white',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
});
