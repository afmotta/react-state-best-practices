import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useParams } from "react-router-dom";

const tabs = [
  { name: "My Account", href: "account", icon: UserIcon },
  { name: "Company", href: "company", icon: BuildingOfficeIcon },
  { name: "Team Members", href: "team", icon: UsersIcon },
  { name: "Billing", href: "billing", icon: CreditCardIcon },
];

export function Tabs(): JSX.Element {
  const { tab: currentTabHref } = useParams();
  const currentTab = tabs.find((tab) => tab.href === currentTabHref);
  return (
    <div>
      <h2 className='text-2xl'>Tabs</h2>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id='tabs'
          name='tabs'
          className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
            {tabs.map((tab) => {
              const isCurrent = tab.href === currentTabHref;
              return (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={clsx(
                    isCurrent
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  <tab.icon
                    className={clsx(
                      isCurrent
                        ? "text-indigo-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "-ml-0.5 mr-2 h-5 w-5"
                    )}
                    aria-hidden='true'
                  />
                  <span>{tab.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      {currentTab && (
        <div className='pt-8 flex items-center'>
          <currentTab.icon
            className='text-indigo-500 -ml-0.5 mr-2 h-5 w-5'
            aria-hidden='true'
          />
          <h3 className='text-2xl text-indigo-500'>{currentTab?.name}</h3>
        </div>
      )}
    </div>
  );
}
