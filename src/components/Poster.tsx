import ERAS from '@/constants/eras';
import { useApp } from '@/contexts/AppContext';
import * as React from 'react';
import { Tile } from '.';
// TODO: Remove these
// Build your own function to resize text
import { AutoTextSize } from 'auto-text-size';

const Poster: React.FunctionComponent = () => {
  const { title, subTitle } = useApp();

  return (
    <div id="poster" className="flex w-[292px] flex-col items-center gap-4 bg-white p-4 lg:w-[486px] lg:gap-6 lg:p-8">
      <div className="grid grid-cols-3 border-l-2 border-t-2 border-black">
        {ERAS.map(({ key, ...era }) => (
          <Tile key={key} {...era} />
        ))}
      </div>

      <div className="flex w-full select-none flex-col items-center gap-2 font-pistilli uppercase">
        <AutoTextSize
          mode="oneline"
          minFontSizePx={20}
          maxFontSizePx={160}
          fontSizePrecisionPx={0.1}
          className="scale-y-150 leading-tight text-black"
          style={{ fontSize: 46.8854 }}
        >
          {title}
        </AutoTextSize>

        <AutoTextSize
          mode="oneline"
          minFontSizePx={20}
          maxFontSizePx={160}
          fontSizePrecisionPx={0.1}
          className="leading-tight text-black"
          style={{ fontSize: 44.2557 }}
        >
          {subTitle}
        </AutoTextSize>
      </div>
    </div>
  );
};

export default Poster;
