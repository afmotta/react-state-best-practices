import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

const promiseMachine = createMachine({
  id: "promise",
  initial: "pending",
  states: {
    pending: {
      on: {
        RESOLVE: { target: "resolved" },
        REJECT: { target: "rejected" },
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      type: "final",
    },
  },
});

export function XState(): JSX.Element {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div>
      <h2 className='text-2xl mb-4'>XState</h2>
      {state.matches("pending") && (
        <p className='text-xl'>Loading...</p>
      )}
      {state.matches("rejected") && (
        <p className='text-xl text-red-500'>Promise Rejected</p>
      )}
      {state.matches("resolved") && (
        <p className='text-xl text-emerald-500'>Promise Resolved</p>
      )}
      <div className='py-4'>
        <button
          className='inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 mr-8'
          onClick={() => send("RESOLVE")}
        >
          Resolve
        </button>
        <button
          className='inline-flex items-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
          onClick={() => send("REJECT")}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
