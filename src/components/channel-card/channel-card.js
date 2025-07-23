import React from 'react';
import { CardContent, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";


function ChannelCard({ video }) {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '310px' },
                height: '326px',
                background: 'linear-gradient(190deg, rgba(152,3,142,1) 5%, rgba(53,41,201,1) 76%)',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        borderRadius: '50%',
                        height: '180px',
                        width: '180px',
                        mb: 2,
                    }}
                />
                <Typography variant="h6">
                    {video?.snippet?.title}{' '}
                    <CheckCircle sx={{ fontSize: '14px', color: 'white', ml: '5px' }} />
                </Typography>

                {video?.statistics?.subscriberCount && (
                    <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'white' }}>
                        {parseInt(video.statistics.subscriberCount).toLocaleString('en-US')} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Box>
    );
}

export default ChannelCard;