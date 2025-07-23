import './App.css';
import React from "react";

import Navbar from "../navbar/navbar";
import Main from "../main/main";
import {Routes, Route} from "react-router";
import Channel from "../channel/channel";
import Search from "../search/search";
import Videos from "../videos/videos";
import {Box} from "@mui/material";
import VideoDetail from "../videoDetail/video-Detail";

const App = () => {
    return (
       <Box sx={{fontWeight:'bold'}}>
           <Navbar/>
           <Routes>
               <Route>
                   <Route path='/' element={<Main/>}/>
                   <Route path='/channel/:id' element={<Channel/>}/>
                   <Route path='/video/:id' element={<Videos/>}/>
                   <Route path='/search/:id' element={<Search/>}/>
                   <Route path='/video-detail/:id' element={<VideoDetail/>}/>
               </Route>
           </Routes>
       </Box>
    );
}




export default App;