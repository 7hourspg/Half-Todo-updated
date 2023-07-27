import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
const { width: width, height: height } = Dimensions.get('window');

const TaskAllRoute = ({ navigation, backgroundColor }) => {
  const [state, setState] = useState('');
  const isFocused = useIsFocused();
  // console.log(backgroundColor);
  // console.log(state);
  console.log(isFocused)
  return (
    <View style={styles.ctr}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.ctr}
      >
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => {
            return navigation.navigate('all'), setState('all');
          }}
        >
          <View
            style={[
              styles.btn,
              {
                backgroundColor: `${isFocused? 'red' : '#B3FFAE'}`,
              },
            ]}
          >
            <Text style={styles.text}>All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => {
            return navigation.navigate('Personal'),setState('green');
          }}
        >
          <View
            style={[
              styles.btn,
              {
                backgroundColor: `${isFocused? 'red' : '#B3FFAE'}`,
              },
            ]}
          >
            <Text style={styles.text}>Personal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.navigate('Work')}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>Work</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.navigate('all')}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>Whishlist</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.navigate('all')}
        >
          <View style={styles.btn}>
            <Text style={styles.text}>Bithday</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TaskAllRoute;

const styles = StyleSheet.create({
  ctr: {
    // backgroundColor: '#282A3A',
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#00000000',
  },

  text: {
    color: 'white',
  },
  btn: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    // marginLeft: 20,
  },
});
