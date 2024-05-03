import "./SideMenu.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import MenuData from "../../components/Menu/MenuData";

const SideMenu = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="w-[20%] transition-transform  sm:translate-x-0 rounded-xl"
        aria-label="Sidebar"
      >
        <div
          id="accordionExample"
          className="px-2 py-4 overflow-y-auto side-menu"
        >
          <ul className="font-medium">
            {MenuData.map((data, i) => {
              return <Menu data={data} key={i} unique={i} />;
            })}
          </ul>
        </div>
      </aside>
      <script
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
      ></script>
    </>
  );
};
export default SideMenu;
