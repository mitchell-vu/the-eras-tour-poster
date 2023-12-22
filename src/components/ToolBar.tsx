import { useApp } from '@/contexts/AppContext';
import React from 'react';

const ToolBar: React.FC = () => {
  const { title, setTitle, subTitle, setSubTitle } = useApp();

  return (
    <div className="flex flex-col gap-4 bg-white p-8">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          className="border border-eras-midnight p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="sub-title">Sub-title</label>
        <input
          id="sub-title"
          type="text"
          value={subTitle}
          onChange={({ target }) => setSubTitle(target.value)}
          className="border border-eras-midnight p-2"
        />
      </fieldset>
    </div>
  );
};

export default ToolBar;
