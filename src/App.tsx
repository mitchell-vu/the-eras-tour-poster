import { Poster, ToolBar } from '@/components';
import AppProvider from '@/contexts/AppContext';
import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

const App: React.FC = () => {
  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Pistilli-Roman'],
        urls: ['../index.css'],
      },
    });
  }, []);

  return (
    <AppProvider>
      <div className="relative h-screen w-screen overflow-hidden">
        <main className="flex h-screen w-screen flex-col overflow-hidden bg-eras-midnight md:flex-row">
          <div className="flex-1 overflow-auto p-10">
            <div className="flex items-center justify-center">
              <Poster />
            </div>
          </div>
          <ToolBar />
        </main>

        <div id="poster" className="absolute left-0 top-0 -z-10">
          <Poster className="!h-[2880px] !w-[1800px] !gap-32 !p-32" size="large" />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
