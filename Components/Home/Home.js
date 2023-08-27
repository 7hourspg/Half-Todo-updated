import React, {useContext} from "react";
import Drawer from "../../Drawer/Drawer";
import {ThemeContext} from "../../Context/ThemeContext";
import Loading from "../LoadingScreen/Loading";

const Home = () => {
   const {isLoading} = useContext(ThemeContext);

   return <>{isLoading ? <Loading /> : <Drawer />}</>;
};

export default Home;
