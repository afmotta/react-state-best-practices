export function Home(): JSX.Element {
  return (
    <>
      <h2 className='text-2xl'>Some best practices</h2>
      <h3 className='text-xl'>
        Learned from experience and highly opinionated
      </h3>
      <h3 className='text-xl mt-8'>Disclaimers</h3>
      <ul role='list' className='divide-y divide-gray-200'>
        <li className='relative bg-white py-3 hover:bg-gray-50'>
          Go wide, not deep
        </li>
        <li className='relative bg-white py-3 hover:bg-gray-50'>
          There's plenty more fish in the sea
        </li>
        <li className='relative bg-white py-3 hover:bg-gray-50'>
          Your mileage may vary
        </li>
        <li className='relative bg-white py-3 hover:bg-gray-50'>
          Hopefully, by the end you all go "Duh!"
        </li>
      </ul>
    </>
  );
}
