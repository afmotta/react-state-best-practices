import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router";

const queryClient = new QueryClient(
  // {
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity
  //     }
  //   }
  // }
);

export function Remote(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  )
} 
