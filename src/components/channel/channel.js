import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServise} from "../apiServise/apiServise";
import {Box, Container} from "@mui/material";
import ChannelCard from "../channel-card/channel-card";


function Channel() {
    const [channelVideo, setChannelVideo] = useState()
    const [videos, setVideos] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const videoData = await ApiServise.fetching(`channels?part=snippet&id=${id}`);
                setChannelVideo(videoData.items[0]);

                const dataVideo = await ApiServise.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                setVideos(dataVideo.items);

            } catch (error) {
                console.log('error');
            }
        };

        getData();
    }, [id]);
    return (
        <Box minHeight={'95vh'}>
            <Box>
                <Box
                    width={'100%'}
                    height={'200px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelVideo?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <ChannelCard videos={channelVideo} marginTop={'-100px'} marginAuto={'0 auto'}/>
            </Box>
            <Container maxWidth={'90%'} sx={{marginTop: '30px'}}>
                <video video={videos}/>
            </Container>
        </Box>
    );
}

export default Channel;