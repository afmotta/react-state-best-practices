import { useState } from "react";
import { Toggle } from "../components/Toggle";

export function State(): JSX.Element {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <h2 className='text-2xl'>useState</h2>
      <div className='py-2'>
        <Toggle enabled={enabled} setEnabled={setEnabled} />
      </div>
    </>
  );
}
