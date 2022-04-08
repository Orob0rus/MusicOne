import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import BungalowIcon from '@mui/icons-material/Bungalow';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar () {
    const options = ["Home", "Search", "Your Library"];
    const icons = {"Home": BungalowIcon, "Search": SearchIcon, "Library": LibraryMusicIcon};
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://i.pinimg.com/236x/d5/62/d4/d562d4205927c8d1ca5eed0adcaaa25d.jpg" alt=""/>
            {options.map(function(option) {
                return <SidebarOption Icon={icons[option]} title={option}/>
            })
        }
            </div>
    )
}
export default Sidebar;