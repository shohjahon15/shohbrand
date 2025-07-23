import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServise} from "../apiServise/apiServise";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {CheckCircle, FavoriteOutlined, MarkChatRead, Visibility} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import Videos from "../videos/videos";
import ClearIcon from '@mui/icons-material/Clear';
import Link from "@mui/material/Link";

const VideoDetail = () => {
    const [video, setvideo] = useState(null)
    const [relatedVideo, setRelatedVideo] = useState([])
    const {id} = useParams()

    console.log(video)
    console.log(relatedVideo)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoData = await ApiServise.fetching(`videos?part=snippet,statistics&id=${id}`);
                setvideo(videoData.items[0]);

                const relatedData = await ApiServise.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
                setRelatedVideo(relatedData.items)

            } catch (error) {
                console.log('error');
            }
        }
            fetchData()
        },[id]);

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display='flex' sx={{flexDirection: {xs: 'column', md: 'row'}}}>

                <Box width={{xs: '100%', md: '75%'}}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        className='react-player'
                        controls
                    />
                    <Box>
                        {video?.snippet?.tags?.map((item, idx) => (
                            <Chip
                                label={item}
                                key={idx}
                                sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
                                deleteIcon={<ClearIcon/>}
                                variant='outlined'
                            />
                        ))}
                    </Box>
                    <Typography variant='h5' fontWeight='bold' p={2}>
                        {video?.snippet?.title}
                    </Typography>
                    <Typography variant='subtitle1' p={2} sx={{opacity: '.7'}}>
                        {video?.snippet?.description}
                    </Typography>
                    <Stack direction='row' gap='20px' alignItems='center' py={1} px={2}>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <Visibility/>
                            {parseInt(video?.statistics?.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <FavoriteOutlined/>
                            {parseInt(video?.statistics?.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <MarkChatRead/>
                            {parseInt(video?.statistics?.commentCount).toLocaleString()} comments
                        </Stack>
                    </Stack>
                    <Stack direction='row' py={1} px={2}>
                        <Link to={`/channel/${VideoDetail?.snippet?.channelId}`}>
                            <Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
                                <Avatar
                                    alt={video?.snippet?.channelTitle}
                                    src={video?.snippet?.thumbnails?.default?.url}
                                />
                                <Typography variant='subtitle2' color='gray'>
                                    {video?.snippet?.channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                                </Typography>
                            </Stack>
                        </Link>
                    </Stack>
                </Box>

                <Box
                    width={{xs: '100%', md: '25%'}}
                    px={2}
                    py={{md: 1, xs: 5}}
                    justifyContent='center'
                    alignItems='center'
                    overflow='scroll'
                    maxHeight={'120vh'}
                >
                    <Videos video={relatedVideo}/>
                </Box>

            </Box>
        </Box>

    );
}

export default VideoDetail;