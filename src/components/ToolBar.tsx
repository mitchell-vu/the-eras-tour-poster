import { useApp } from '@/contexts/AppContext';
// TODO: Remove these
// Build your own function to download the image
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import React from 'react';

const ToolBar: React.FC = () => {
  const { title, setTitle, subTitle, setSubTitle } = useApp();

  const handleDownload = async () => {
    const poster = document.getElementById('poster');

    if (!poster) return;

    const canvas = await html2canvas(poster!);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

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

      <button className="border border-eras-midnight p-3" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default ToolBar;
