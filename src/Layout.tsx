import { Outlet } from "react-router-dom";
import { Link } from "./components/Link";
import { Navbar } from "./components/Navbar";

export function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className='p-8'>
        <Outlet />
      </div>
    </>
  );
}
