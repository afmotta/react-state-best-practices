import { useState } from "react";
import { BooleanParam, useQueryParam } from "use-query-params";
import { Toggle } from "../components/Toggle";

export function QueryParams(): JSX.Element {
  const [enabledUS, setEnabledUS] = useState(false);
  const [enabledQ, setEnabledQ] = useQueryParam("enabled", BooleanParam);

  return (
    <>
      <h2 className='text-2xl'>Query</h2>
      <div className='py-2'>
        <p>This toggle uses useState</p>
        <Toggle enabled={enabledUS} setEnabled={setEnabledUS} />
      </div>
      <div className='py-2'>
        <p>This toggle uses useQueryParam</p>
        <p>
          Watch the <code>?enabled</code> value change in the URL
        </p>
        <Toggle enabled={!!enabledQ} setEnabled={setEnabledQ} />
      </div>
    </>
  );
}
