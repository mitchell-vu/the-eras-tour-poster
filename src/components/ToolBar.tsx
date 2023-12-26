import { Tab } from '@headlessui/react';
import classNames from 'classnames';
// TODO: Remove these
// Build your own function to download the image
import React from 'react';
import EditTab from './EditTab';
import ExportTab from './ExportTab';

const TABS = [
  { tab: 'Layout', key: 'layout', panel: <div>Layout</div> },
  { tab: 'Edit', key: 'edit', panel: <EditTab /> },
  { tab: 'Export', key: 'export', panel: <ExportTab /> },
];

const ToolBar: React.FC = () => {
  return (
    <div className="flex min-w-[400px] flex-col bg-white p-8">
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {TABS.map(({ tab, key }) => (
              <Tab
                key={key}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected ? 'bg-white text-blue-700 shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {TABS.map(({ key, panel }) => (
              <Tab.Panel key={key}>{panel}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default ToolBar;
