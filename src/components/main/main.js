import React, {useEffect, useState} from 'react';
import {Box, Stack, Container, Typography} from "@mui/material";
import Category from "../category/category";
import {colors} from "../constans";
import {ApiServise} from "../apiServise/apiServise";
import Videos from "../videos/videos";


const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New')
    const [video, setVideo] = useState([])
    const selectedCategory = category => {
        setSelectCategory(category)
    }

    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideo(data.items))
    }, [selectCategory])

    return (
        <Box>
            <Stack>
                <Category selectedCategory={selectedCategory} selectCategory={selectCategory}/>
                <Box p='2' sx={{height: '90vh'}}>
                    <Container maxWidth={'90%'}>
                        <Typography variant='h4' style={{fontWeight: 'bold', marginTop: '15px'}}>
                            {selectCategory}<span style={{color: colors.fontColor}}> videos</span>
                        </Typography>
                        <Videos video={video}/>

                    </Container>
                </Box>
            </Stack>
        </Box>
    );
}

export default Main;