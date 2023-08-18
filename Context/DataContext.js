import React, {
   useEffect,
   useReducer,
   createContext,
   useState,
   useCallback,
} from "react";

import {View, Text, Button} from "react-native";
import {TextInput} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const INTIAL_STATE = [];

export const DataContext = createContext(INTIAL_STATE);

export const DataProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
   const [data, setData] = useState([]);

   const getTasksData = async () => {
      try {
         // setIsLoading(true);

         const jsonValue = await AsyncStorage.getItem("tasks");
         // console.log(jsonValue, "JSON VALUE")

         setData(JSON.parse(jsonValue));

         // setTimeout(() => {
         //    setIsLoading(false);
         // }, 1000);
      } catch (e) {
         console.log(e);
      }
   };

   const setTasksData = async (Data) => {
      // console.log(Data, "DATA FROM REDUCER");
      // console.log(data, "DATA FROM REDUCER");
      // // console.log(data.push(Data), "DATA FROM REDUCER")
      // console.log(typeof data, "DATA FROM REDUCER");
      console.log(Data, "DATA FROM SetTasksData")
      try {
         if (data === null) {
            await AsyncStorage.setItem("tasks", JSON.stringify([Data]));
            // console.log("Null")
            getTasksData();
         } else {
            const jsonValue = JSON.stringify([...data,Data]);
            // console.log(jsonValue,"JSON VALUE")
            await AsyncStorage.setItem("tasks", jsonValue);

            getTasksData();
            // console.log("Object")
         }
      } catch (e) {
         console.log(e, "ERROR");
      }
   };

   useEffect(() => {
      getTasksData();
   }, []);

   // const onDismiss = useCallback((id) => {
   // //  const fetchedData=  getTasksData();

   //    // console.log(getTasksData(),"GET TASKS DATA")
   //    console.log(id, "ID");
   //    const dismis= data?.filter((item) => item.id !== id)
   //    // console.log("first", tasks)
   //    // console.log(tasks, "TASKS");
   //    console.log(dismis, "DISMISS");
   //    // console.log(data, "DATA");
   // }, []);

   const onDismiss = (id) => {
      console.log(id, "DISMISS");
      const dismis = data?.filter((item) => item.id !== id);
      console.log(dismis, "DISMISS");
      setFilteredData = async () => {
         try {
         //   await AsyncStorage.removeItem('tasks')
           await AsyncStorage.setItem("tasks", JSON.stringify(dismis));

         } catch(e) {
           console.log(e,"ERROR")
         }
       
         console.log('Done.')
       }
       setData(dismis);
       setFilteredData();
      // setTasksData(...dismis);
      getTasksData();
   };

   // console.log(data, "DATA FROM REDUCER Home");
   return (
      <DataContext.Provider
         value={{
            state,
            dispatch,
            data,
            setData,
            getTasksData,
            setTasksData,
            onDismiss,
         }}
      >
         {children}
      </DataContext.Provider>
   );
};
