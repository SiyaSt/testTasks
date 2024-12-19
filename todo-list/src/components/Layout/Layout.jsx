import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../API";

export const Layout = () => (
  // если не нужна вложенность, то можно использовать React fragment <></>
  <div>
    {/* лучше так - <Header/> */}
    <Header></Header>
    <Outlet />
    <Footer></Footer>
  </div>
);
