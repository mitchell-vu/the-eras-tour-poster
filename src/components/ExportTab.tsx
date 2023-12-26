import { useApp } from '@/contexts/AppContext';
import { ImageSquare } from '@phosphor-icons/react';
import { saveAs } from 'file-saver';
import { domToPng } from 'modern-screenshot';
import React from 'react';

const ExportTab: React.FC = () => {
  const { title } = useApp();

  const handleExportPng = async () => {
    const poster = document.getElementById('poster');
    if (!poster) return;

    const dataURL = await domToPng(poster);
    saveAs(dataURL, `${title.toLowerCase().split(' ').join('-')}.png`);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-black/[0.1] p-3 transition ease-in-out hover:bg-eras-midnight hover:text-white"
        onClick={handleExportPng}
        aria-label="Export as PNG"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.1]">
          <ImageSquare size={24} weight="bold" />
        </div>
        PNG
      </button>
      <button
        className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-black/[0.1] p-3 transition ease-in-out hover:bg-eras-midnight hover:text-white"
        onClick={handleExportPng}
        aria-label="Export as PNG"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.1]">
          <ImageSquare size={24} weight="bold" />
        </div>
        PNG
      </button>
      <button
        className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-black/[0.1] p-3 transition ease-in-out hover:bg-eras-midnight hover:text-white"
        onClick={handleExportPng}
        aria-label="Export as PNG"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.1]">
          <ImageSquare size={24} weight="bold" />
        </div>
        PNG
      </button>
      <button
        className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-black/[0.1] p-3 transition ease-in-out hover:bg-eras-midnight hover:text-white"
        onClick={handleExportPng}
        aria-label="Export as PNG"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.1]">
          <ImageSquare size={24} weight="bold" />
        </div>
        PNG
      </button>
    </div>
  );
};

export default ExportTab;
