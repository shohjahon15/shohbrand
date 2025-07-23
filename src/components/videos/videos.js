import React from 'react';
import {Box} from "@mui/material";
import VideoCard from "../video-card/video-card";
import Stack from "@mui/material/Stack";
import ChannelCard from "../channel-card/channel-card";
import Loader from "../loader/loader";


const Videos = ({video}) => {
    if (video.length===0)return <Loader/>
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
        >
            {video.map((item) => (
                <Box key={item?.id?.videoId}>
                    {item?.id?.videoId && <VideoCard video={item}/>}
                    {item?.id?.channelId && <ChannelCard channel={item}/>}

                </Box>
            ))}
        </Stack>
    );
}

export default Videos;