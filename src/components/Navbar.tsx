import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "useState", href: "use-state" },
  { name: "URL", href: "url" },
  { name: "Context", href: "context" },
  { name: "Remote", href: "remote" },
  { name: "Jotai", href: "jotai" },
  { name: "XState", href: "xstate" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <div className='bg-gray-800'>
      <div className='mx-auto px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <Link to='/'>
                <h1 className='text-3xl text-indigo-600'>React State</h1>
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
