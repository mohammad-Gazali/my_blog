import GroupSideNav from "./GroupSideNav";
import { GoDashboard } from "react-icons/go";
import { GiHistogram } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi"
import { BsTable, BsFillChatDotsFill, BsStarFill, BsPersonCircle } from "react-icons/bs";

const AsideItem = ({ children }) => {
  return (
    <li className="flex items-center gap-3 text-[16px] py-2 px-4 cursor-pointer rounded-xl text-gray-500 hover:text-primary hover:bg-mylightblue/20 transition-all duration-200">
      {children}
    </li>
  );
};

const AsideNavDashBoard = () => {
  

  return (
    <aside className={`flex h-full flex-col px-4 w-1/5 transition-all relative`}>
      <GroupSideNav header="Main">
        <AsideItem>
          <GoDashboard /> Dashbord
        </AsideItem>
        <AsideItem>
          <GiHistogram /> Sales
        </AsideItem>
        <AsideItem>
          <BsTable /> Tables
        </AsideItem>
      </GroupSideNav>
      <GroupSideNav header="Clients">
        <AsideItem>
          <BsFillChatDotsFill /> Messages
        </AsideItem>
        <AsideItem>
          <BsStarFill /> Ratings
        </AsideItem>
      </GroupSideNav>
      <GroupSideNav header="Account" divider="no">
        <AsideItem>
          <BsPersonCircle /> Profile
        </AsideItem>
        <AsideItem>
          <BiLogOut /> Logout
        </AsideItem>
      </GroupSideNav>
    </aside>
  );
};

export default AsideNavDashBoard;
