import { Link } from "../components/Link";
import { RoleContextProvider } from "./roleContext";
import { SetContext } from "./SetContext";
import { ShowContext } from "./ShowContext";

export function Context(): JSX.Element {
  return (
    <RoleContextProvider>
      <Link to='/context'>
        <h1 className='text-2xl'>Context</h1>
      </Link>
      <div className="mt-4"/>
      <SetContext />
      <div className="mt-4"/>
      <ShowContext />
    </RoleContextProvider>
  );
}
