import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/Ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/Md";
import { CgMusicNote } from "react-icons/Cg";
import { FiFilm } from "react-icons/Fi";
import { IoGameControllerSharp } from "react-icons/Io5";
import { ImNewspaper } from "react-icons/Im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/Gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/Ri";
import { FiSettings, FiHelpCircle } from "react-icons/Fi";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {name: "Fashion & beauty",icon: <GiEclipse />,type: "category",
    divider: true,
    },

    
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];