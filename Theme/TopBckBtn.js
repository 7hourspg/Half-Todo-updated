import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

{
  /* Nested ROUTE is Here🫡❤️ */
}
import Back from 'react-native-vector-icons/Ionicons';

const TopBckBtn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bckBtn}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home', { screen: 'Tasks' })}>
          <Text style={styles.bck_txt}>
            <Back name="arrow-back" size={23} color={'black'} />
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={[
              styles.bck_txt,
              { fontWeight: '500', fontSize: 18, marginLeft: 20 },
            ]}
          >
            Theme
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopBckBtn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
  bckBtn: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bck_txt: {
    marginLeft: 10,
    marginTop: 10,
  },
});

{
  /* <Button
onPress={() => navigation.navigate('Home', { screen: 'Tasks' })}
title="Go back home"
/> */
}
