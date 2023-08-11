import React, {useEffect, useReducer, createContext,useState} from "react";

import {View, Text, Button} from "react-native";
import {TextInput} from "react-native-paper";
const INTIAL_STATE = [];

// {
//    id: 1,
//    taskTitle: "Hello",
//    taskCategory: "Work",
//    taskDate: "2021-05-25",
//    taskTime: "12:00",
//    isTaskCompleted: false,
// },
// {
//    id: 2,
//    taskTitle: "Hello World",
//    taskCategory: "Work",
//    taskDate: "2021-05-25",
//    taskTime: "12:00",
//    isTaskCompleted: false,
// },

const reducer = (state, action) => {
   switch (action.type) {
      case "set_taskTitle":
         return {...state, taskTitle: action.payload};
      case "change_taskCategory":
         return {...state, taskCategory: action.payload};
      case "isTaskCompleted":
         return {...state, inputText: action.payload};
      case "Add_Task":
         return [...state, action.payload];
      default:
         return state;
   }
};

// const Reducer = () => {
//    const [state, dispatch] = useReducer(reducer, intialState);
//    const [text, setText] = React.useState("");

//    useEffect(() => {
//       console.log(state, "STATE");
//    }, [state]);
//    console.log(state.inputText, "INPUT");
//    console.log(text, "TEXT")
//    return (
//       <View>
//          <Text>{state.name}</Text>
//          <Text>{state.age}</Text>
//          <TextInput
//             onChangeText={setText
//             }
//             placeholder="Input here.."
//          />
//          <Button
//             title="Change Name"
//             onPress={() => dispatch({type: "change_name", payload: "Hello"})}
//          />
//          <Button
//             title="Change Age"
//             onPress={() => dispatch({type: "change_age", payload: 22})}
//          />
//       </View>
//    );
// };

// export default Reducer;

export const ReducerContext = createContext(INTIAL_STATE);

export const ReducerProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
   const [data, setData] = useState([]);


   console.log(data, "DATA FROM REDUCER Home");
   return (
      <ReducerContext.Provider value={{state, dispatch,data,setData}}>
         {children}
      </ReducerContext.Provider>
   );
};
