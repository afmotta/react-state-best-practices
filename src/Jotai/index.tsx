import { atom, useAtom } from "jotai";
import React from "react";

export const textAtom = atom("hello world");
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const Input = () => {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e: React.BaseSyntheticEvent) => setText(e.target.value);
  return (
    <div>
      <div className='mt-1 border-b border-gray-300 focus-within:border-indigo-600'>
        <input
          className='block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm'
          value={text}
          onChange={handleChange}
          type='text'
        />
      </div>
    </div>
  );
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

export function Jotai(): JSX.Element {
  return (
    <>
      <h2 className='text-2xl'>Jotai</h2>
      <Input />
      <Uppercase />
    </>
  );
}
