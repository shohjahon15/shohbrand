import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServise} from "../apiServise/apiServise";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Videos from "../videos/videos";
import {colors} from "../constans";
import Container from "@mui/material/Container";
const Search=()=> {
    const [videos, setVideos]=useState([])
    const {id}=useParams()
    console.log(videos)
    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${id}`).then(data => setVideos(data.items))
    }, [])
    return (

        <Box p={2} mt={'50px'} sx={{height:'120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} sx={{fontWeight:'bold'}}>
                    Search for result <span style={{color:colors.fontColor}}>{id}</span>
                </Typography>
                <Videos video={videos}/>
            </Container>
        </Box>
    );
}

export default Search;