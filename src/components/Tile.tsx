import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface ITileProps {
  className?: string;
  title: string;
}

const Tile: React.FunctionComponent<ITileProps> = ({ className, title }) => {
  return (
    <div
      className={twMerge(
        'aspect-square w-[86px] overflow-hidden border-b-2 border-r-2 border-black sm:w-[140px]',
        className,
      )}
      aria-label={title}
    ></div>
  );
};

export default Tile;
