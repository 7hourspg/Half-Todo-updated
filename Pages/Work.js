import {View, Text, Dimensions} from "react-native";
import React from "react";
import AddTask from "../Components/AddTask/AddTask";

const Work = () => {
   const {height, width} = Dimensions.get("window");
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "white",
          //   height,
            alighItems: "center",
            justifyContent: "center",
          //   width,
         }}
      >
         <Text style={{textAlign: "center"}}>
            Work Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perspiciatis quos, architecto modi quae, quidem dolores praesentium
            tenetur provident possimus consequuntur laudantium cumque. Cumque
            saepe quo beatae accusamus incidunt a, quam perferendis voluptate
            sapiente facilis voluptates corporis totam. Est alias id sed
            incidunt placeat, distinctio aspernatur deleniti similique, natus
            repudiandae error adipisci voluptas dolores veritatis nulla, totam
            ea facilis at excepturi fugit rerum ducimus eos! Sit nemo quae quod,
            tenetur ipsum iste, velit debitis deserunt explicabo possimus
            mollitia sed. Dicta, ad. Hic at, dolore optio nisi neque illum eius
            ipsum officia iure laborum amet fuga ullam, mollitia perspiciatis ex
            error!
         </Text>

         {/* <View style={{position: "absolute", bottom: 0, right: 0}}> */}
         <AddTask />
         {/* </View> */}
      </View>
   );
};

export default Work;
