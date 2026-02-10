import { useState } from "react";
import Topbar from "../components/Topbar";
import TicketList from "../components/TicketList";
import TicketDetails from "../components/TicketDetails";
import RightPanel from "../components/RightPanel";
import CreateKnowledgeDrawer from "../components/CreateKnowledgeDrawer";
import Sidebar from "../components/Sidebar";
import Lefticonbar from "../components/Lefticonbar";

export default function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="flex h-screen bg-[#0b2a4a]">
      <Lefticonbar/>

      <div className="flex flex-col flex-1 bg-[#08325f]">
        <Topbar onCreate={() => setOpenDrawer(true)} />
          
        <div className="flex flex-1 overflow-hidden ">
          <Sidebar/>
          <TicketList />
          <TicketDetails />
          <RightPanel />
        </div>
      </div>

      {openDrawer && (
        <CreateKnowledgeDrawer onClose={() => setOpenDrawer(false)} />
      )}
    </div>
  );
}

