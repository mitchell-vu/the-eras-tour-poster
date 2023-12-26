import React from 'react';
// TODO: Remove these
// Build your own function to download the image
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const ExportTab: React.FC = () => {
  const handleDownload = async () => {
    const poster = document.getElementById('poster');

    if (!poster) return;

    const canvas = await html2canvas(poster!);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };
  return (
    <div>
      <button className="border border-eras-midnight p-3" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default ExportTab;
