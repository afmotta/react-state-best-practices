import { Link as RRLink } from "react-router-dom";

export function Link({
  children,
  to,
}: React.PropsWithChildren<{ to: string }>): JSX.Element {
  return (
    <RRLink className='text-blue-600 visited:text-purple-600' to={to}>
      {children}
    </RRLink>
  );
}
