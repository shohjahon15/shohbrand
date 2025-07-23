import {
    Checkroom, DeveloperMode, FaceRetouchingNatural,
    FitnessCenter,
    GraphicEq,
    Home,
    LiveTv, MusicNote,
    OndemandVideo,
    School,
    SportsEsports,
    TheaterComedy
} from "@mui/icons-material";
    export const logo="https://static.tildacdn.com/tild6262-3066-4534-a439-633365303133/img_201832.png"

export const colors  ={
    bgColor: 'linear-gradient(90deg,rgba(42, 123, 155, 1) 9%, rgba(32, 46, 36, 1) 100%, rgba(237, 221, 83, 1) 92%)',
    fontColor:'#2A7B9B'
}
    export const categories = [
        {name: 'New', icon: <Home/>},
        {name: 'Movie', icon: <OndemandVideo/>},
        {name: 'Live', icon: <LiveTv/>},
        {name: 'Gaming', icon: <SportsEsports/>},
        {name: 'Education', icon: <School/>},
        {name: 'Sport', icon: <FitnessCenter/>},
        {name: 'Comedy', icon: <TheaterComedy/>},
        {name: 'Podcast', icon: <GraphicEq/>},
        {name: 'Fashion', icon: <Checkroom/>},
        {name: 'Crypto', icon: <DeveloperMode/>},
        {name: 'Gym', icon: <FitnessCenter/>},
        {name: 'Beauty', icon: <FaceRetouchingNatural/>},
        {name: 'Music', icon: <MusicNote/>},
    ]