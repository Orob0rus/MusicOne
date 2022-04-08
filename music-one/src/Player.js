import React from "react";
import { useDataLayerValue } from './DataLayer';
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Body from "./Body";

function Player({ spotify }) {
    const [{user}, dispatch] = useDataLayerValue();
    console.log(user)
    return (
        <div className="player">
            <div className="player_body">
            <Sidebar/>
            <Body/>
            </div>    
            <Footer/>
        </div>
    )
}

export default Player;
