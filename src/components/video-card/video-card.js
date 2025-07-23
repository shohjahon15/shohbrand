import React from 'react';
import {Avatar, Card, CardContent, Stack, Typography, CardMedia} from "@mui/material";
import moment from "moment";
import {CheckCircle} from "@mui/icons-material";
import {Link} from "react-router";

const VideoCard = ({video}) => {
    return (
        <Card
            sx={{width: {xs: '100%', sm: '270px', md: '290px', lg: "310px"}, boxShadow: "none", borderRadius: "5px"}}
        >
               <Link to={`/video-detail/${video.id.videoId}`}>
                   <CardMedia
                       image={video?.snippet?.thumbnails?.high?.url}
                       alt={video?.snippet?.title}
                       sx={{width: {xs: '100%', sm: '270px', md: '290px', lg: "310px"}, height: "180px"}}
                   />
               </Link>

            <CardContent
                sx={{
                    background: "linear-gradient(90deg,rgba(42, 123, 155, 1) 9%, rgba(32, 46, 36, 1) 100%, rgba(237, 221, 83, 1) 92%)",
                    height: "200px",
                    position: "relative",
                }}
            >

               <Link to={`/video-detail/${video.id.videoId}`}>
                   <Typography my={'5px'} sx={{opacity: '.4',color:'white'}}>
                       {moment(video?.snippet?.publishedAt).fromNow()}
                   </Typography>
                   <Typography variant='subtitle1' fonWeight={'bold'} sx={{color:'white'}}>
                       {video?.snippet?.title.slice(0, 50)}
                   </Typography>
                   <Typography variant='subtitle2' sx={{opacity: '.6',color:'white'}}>
                       {video?.snippet?.title.slice(0, 70)}
                   </Typography>
               </Link>
                <Stack
                    direction={'row'}
                    position={'absolute'}
                    bottom={'10px'}
                    alignItems={'center'}
                    gap={'5px'}
                >
                    <Link to={`/Channel/${video.id.channelId}`}>
                        <Avatar src={video?.snippet.thumbnails?.high?.url}/>
                    </Link>
                   <Link to={`/Channel/${video.id.channelId}`}>
                       <Typography variant='subtitle2' color={'white'}>
                           {video?.snippet?.channelTitle}
                           <CheckCircle sx={{fontsize: '8px', color: "white", ml: "5px"}}/>
                       </Typography>
                   </Link>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default VideoCard;