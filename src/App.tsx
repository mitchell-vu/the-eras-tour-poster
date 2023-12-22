import { Poster, ToolBar } from '@/components';
import AppProvider from '@/contexts/AppContext';
import React from 'react';

const App: React.FC = () => {
  return (
    <AppProvider>
      <main className="flex h-screen w-screen flex-col overflow-hidden md:flex-row">
        <div className="flex flex-1 items-center justify-center overflow-auto p-10">
          <Poster />
        </div>
        <ToolBar />
      </main>
    </AppProvider>
  );
};

export default App;
