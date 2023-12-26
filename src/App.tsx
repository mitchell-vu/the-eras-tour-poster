import { Poster, ToolBar } from '@/components';
import AppProvider from '@/contexts/AppContext';
import React from 'react';

const App: React.FC = () => {
  return (
    <AppProvider>
      <main className="flex h-screen w-screen flex-col overflow-hidden md:flex-row">
        <div className="flex-1 overflow-auto p-10">
          <div className="flex items-center justify-center">
            <Poster />
          </div>
        </div>
        <ToolBar />
      </main>
    </AppProvider>
  );
};

export default App;
