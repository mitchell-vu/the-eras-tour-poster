import ERAS from '@/constants/eras';
import { useApp } from '@/contexts/AppContext';
import * as React from 'react';
import { Tile } from '.';
// TODO: Remove these
// Build your own function to resize text
import { AutoTextSize } from 'auto-text-size';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface IPosterProps {
  size?: 'small' | 'large';
  className?: string;
}

const Poster: React.FC<IPosterProps> = ({ size, className }) => {
  const { title, subTitle } = useApp();

  return (
    <div
      className={twMerge(
        'flex w-[292px] flex-col items-center gap-4 bg-white p-4 lg:w-[486px] lg:gap-6 lg:p-8',
        className,
      )}
    >
      <div
        className={twMerge(
          'grid grid-cols-3 border-l-2 border-t-2 border-black',
          size === 'large' && 'border-l-8 border-t-8',
        )}
      >
        {ERAS.map(({ key, className, ...era }) => (
          <Tile
            key={key}
            era={key}
            {...era}
            className={classNames(className, size === 'large' && '!w-[514px] border-b-8 border-r-8')}
          />
        ))}
      </div>

      <div className="flex w-full select-none flex-col items-center gap-2 font-pistilli uppercase">
        <AutoTextSize
          mode="oneline"
          minFontSizePx={20}
          maxFontSizePx={200}
          fontSizePrecisionPx={0.1}
          className="scale-y-150 leading-tight text-black"
          style={{ fontSize: 46.8854 }}
        >
          {title}
        </AutoTextSize>

        <AutoTextSize
          mode="oneline"
          minFontSizePx={20}
          maxFontSizePx={200}
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
