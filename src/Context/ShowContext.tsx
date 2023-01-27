import React from "react";
import { useRole } from "./roleContext";

export function ShowContext() {
  const role = useRole();
  return (
    <p>
      Current selected role is: <span className='font-black'>{role}</span>
    </p>
  );
}
