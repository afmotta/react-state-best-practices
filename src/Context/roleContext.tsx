import React from "react";

export type Role = "user" | "coach" | "staff";

export const RoleContext = React.createContext<{
  role: Role;
  setRole: React.Dispatch<React.SetStateAction<Role>>;
}>({
  role: "user",
  setRole: () => {},
});

export function RoleContextProvider(
  props: React.PropsWithChildren
): JSX.Element {
  const [role, setRole] = React.useState<Role>("user");
  return <RoleContext.Provider value={{ role, setRole }} {...props} />;
}

const useRoleContext = () => React.useContext(RoleContext);
export const useRole = () => useRoleContext().role;
export const useSetRole = () => useRoleContext().setRole;
