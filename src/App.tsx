import React from 'react';
import { Poster } from './components';

const App: React.FC = () => {
  const [title] = React.useState('Taylor Swift');
  const [subTitle] = React.useState('The Eras Tour');

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Poster title={title} subTitle={subTitle} />
    </div>
  );
};

export default App;
