import React from 'react'
import clogo from '../assets/c.png'
import {
  FiInbox,
  FiGrid,
  FiLayers,
  FiGitPullRequest,
  FiBarChart2,
  FiSettings,
   
} from "react-icons/fi";
import {TiContacts} from "react-icons/ti";
import { FaLightbulb } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { VscRobot } from "react-icons/vsc";
import { MdReplayCircleFilled } from "react-icons/md";

const Lefticonbar = () => {
  return (
    <div className="w-16 shrink-0 flex flex-col items-center text-blue-600  text-xl py-4 space-y-6 bg-[#08325f]">
            <div className="text-3xl font-bold ">
                <img className='w-9' src={clogo} alt="" />
            </div>
            <FiInbox className='text-yellow-300'/>
            <FaLightbulb />
            <TiContacts />
            <GrNotes />
            <FiGrid />
             <FiLayers/>
            <FiGitPullRequest/>
            <VscRobot />
            <FaDatabase />
            <MdReplayCircleFilled />     
            <FiBarChart2/>
            <FiSettings/>
          </div>
  )
}

export default Lefticonbar
