import React from 'react';
import "./ChannelRow.css";
import {Avatar} from "@material-ui/core";
import VarifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({image, channel, varified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="ChannelRow__logo"
                alt={channel} src={image}
            />
            <div className="channelRow__text">
                <h4>{channel} {varified && <VarifiedIcon />} </h4>
                <p>
                    {subs} subscribers * {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
