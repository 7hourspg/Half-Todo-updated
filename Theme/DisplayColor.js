import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import ColorData from './Color';
import { ThemeContext } from '../Context/ThemeContext';

const DisplayColor = () => {
  const {getColor} = useContext(ThemeContext);


  return (
    <View style={{ flex: 1, backgroundColor: 'white',maxHeight:250 }}>
      <View style={{ marginLeft: 20, marginVertical: 15 }}>
        <Text style={{ fontSize: 16 }}>Pure Color</Text>
      </View>
      <View style={styles.innerCtr}>
        {ColorData.map((item) => {
          return (
            <View key={item.id} style={{ flexDirection: 'column',marginHorizontal:10 }}>
              <TouchableOpacity
                style={[{ backgroundColor: item.Color }, styles.ColorBox]}
                onPress={()=>getColor(item)}
              ></TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DisplayColor;

const styles = StyleSheet.create({
  innerCtr: {
 
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap:'wrap',
 
  },
  ColorBox: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginTop:20
  },
});
