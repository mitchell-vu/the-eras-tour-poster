import { Tab } from '@headlessui/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import EditTab from './EditTab';
import ExportTab from './ExportTab';

const TABS = [
  // { tab: 'Layout', key: 'layout', panel: <div>Layout</div> },
  { tab: 'Edit', key: 'edit', panel: <EditTab /> },
  { tab: 'Export', key: 'export', panel: <ExportTab /> },
];

const ToolBar: React.FC = () => {
  return (
    <div className="flex h-[40vh] flex-col bg-[#E0EDFD] md:h-full md:min-w-[360px] lg:min-w-[520px] xl:min-w-[640px]">
      <Tab.Group>
        <Tab.List className="flex space-x-2 p-4 md:p-8">
          {TABS.map(({ tab, key }) => (
            <Tab
              key={key}
              className={({ selected }) =>
                twMerge(
                  'w-full rounded-full py-2.5 font-medium leading-5 transition duration-150 ease-in-out',
                  selected ? 'bg-eras-midnight text-white' : 'text-eras-midnight hover:bg-eras-midnight/[0.12]',
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="overflow-y-auto p-4 pt-0 md:p-8 md:pt-0">
          {TABS.map(({ key, panel }) => (
            <Tab.Panel key={key}>{panel}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ToolBar;
