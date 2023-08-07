import {View, Text, Button} from "react-native";
import React from "react";
import {ReducerContext} from "../Components/Reducer/ReducerContext";

const Hola = () => {
   const {state, dispatch} = React.useContext(ReducerContext);

  //  console.log(state, "DATA");

   return (
      <View>
         <Text>{state?.name}</Text>
         <Text>{state?.age}</Text>
         <Button
            title="Change Name"
            onPress={() =>
               dispatch({type: "change_name", payload: "Hello, Rajiv"})
            }
         />
         <Button
            title="Change Age"
            onPress={() => dispatch({type: "change_age", payload: 22})}
         />
      </View>
   );
};

export default Hola;
