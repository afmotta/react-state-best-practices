import { Outlet } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { Link } from "../components/Link";

export function URL(): JSX.Element {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Link to='/url'>
        <h1 className='text-2xl'>URL</h1>
      </Link>
      <div className="mt-4"/>
      <Link to='tabs/account'>Tabs</Link>
      <div />
      <Link to='query-params'>Query</Link>
      <div className='py-4'>
        <Outlet />
      </div>
    </QueryParamProvider>
  );
}
