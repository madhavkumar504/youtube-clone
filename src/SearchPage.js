import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            
            <ChannelRow
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
                channel="Clever Programmer"
                varified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome progamming videos"
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one now you can join free course for Learn"
                timestamp="59 seconds ago"
                channel="Ignuo Crackers"
                title="Let's Build a YouTube Clone"
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one now you can join free course for Learn"
                timestamp="59 seconds ago"
                channel="Ignuo Crackers"
                title="Let's Build a YouTube Clone"
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one now you can join free course for Learn"
                timestamp="59 seconds ago"
                channel="Ignuo Crackers"
                title="Let's Build a YouTube Clone"
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one now you can join free course for Learn"
                timestamp="59 seconds ago"
                channel="Ignuo Crackers"
                title="Let's Build a YouTube Clone"
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage
