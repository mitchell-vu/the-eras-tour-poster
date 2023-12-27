import classNames from 'classnames';
import * as React from 'react';
import { ReactFitty } from 'react-fitty';
import { twMerge } from 'tailwind-merge';

import ERAS from '@/constants/eras';
import { useApp } from '@/contexts/AppContext';
import { Tile } from '.';
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

      <div className="flex w-full select-none flex-col items-center gap-1 font-pistilli uppercase leading-tight text-black">
        <ReactFitty className="scale-y-150" minSize={16} maxSize={200}>
          {title}
        </ReactFitty>
        <ReactFitty minSize={16} maxSize={200}>
          {subTitle}
        </ReactFitty>
      </div>
    </div>
  );
};

export default Poster;
