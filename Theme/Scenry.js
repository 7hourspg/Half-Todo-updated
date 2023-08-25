import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React,{useContext} from 'react';
import { Scenery } from '../Theme/SceneryImage';
import { ThemeContext } from '../Context/ThemeContext';
const Scenry = () => {
  const {getScenery}=useContext(ThemeContext)
  // console.log(getScenery,'Hello')

  return (
    <View style={styles.Main_ctr}>
      <View>
        <Text style={{ color: 'white', marginLeft: 20, fontSize: 16 }}>
          Scenry
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 7,
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {Scenery.map((item) => {
          return (
            <TouchableOpacity style={{ marginBottom: 20 }} key={item.id}
            onPress={()=>getScenery(item)}
            >
              <Image
                source={{ uri: item.SceneryImage }}
                style={{ width: 160, height: 100, borderRadius: 10 }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Scenry;

const styles = StyleSheet.create({
  Main_ctr: {
    flex: 1,
    // backgroundColor: 'black',
    // color: 'white',
    // height: 250,
    // backgroundColor: 'red',
    marginTop: 40,
  },
});
