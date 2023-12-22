import { useApp } from '@/contexts/AppContext';
import { AutoTextSize } from 'auto-text-size';
import * as React from 'react';
import { Tile } from '.';

const ERAS = [
  {
    title: 'Taylor Swift',
    year: 2006,
    key: 'taylor-swift',
    className: 'bg-eras-taylor-swift',
    filter: {
      feColorMatrix: '0.6796875 0 0 0 0.03515625 0.78515625 0 0 0 0.02734375 0.66015625 0 0 0 0.04296875 0 0 0 1 0',
    },
  },
  {
    title: 'Fearless',
    year: 2008,
    key: 'fearless',
    className: 'bg-eras-fearless',
    filter: {
      feColorMatrix: '0.8828125 0 0 0 0.078125 0.75390625 0 0 0 0.046875 0.47265625 0 0 0 0.0859375 0 0 0 1 0',
    },
  },
  {
    title: 'Speak Now',
    year: 2010,
    key: 'speak-now',
    className: 'bg-eras-speak-now',
    filter: {
      feColorMatrix: '0.72265625 0 0 0 0.0625 0.6328125 0 0 0 0.04296875 0.7265625 0 0 0 0.07421875 0 0 0 1 0',
    },
  },
  {
    title: 'Red',
    year: 2012,
    key: 'red',
    className: 'bg-eras-red',
    filter: {
      feColorMatrix: '0.44140625 0 0 0 0.0703125 0.15234375 0 0 0 0.0546875 0.1875 0 0 0 0.07421875 0 0 0 1 0',
    },
  },
  {
    title: 'Midnight',
    year: 2022,
    key: 'midnight',
    className: 'bg-eras-midnight row-span-5 aspect-[1/3]',
    filter: {
      feColorMatrix: '0.71875 0 0 0 0.17578125 0.68359375 0 0 0 0.20703125 0.58984375 0 0 0 0.30859375 0 0 0 1 0',
    },
  },
  {
    title: '1989',
    year: 2014,
    key: '1989',
    className: 'bg-eras-1989',
    filter: {
      feColorMatrix: '0.671875 0 0 0 0.0703125 0.85546875 0 0 0 0.05078125 0.890625 0 0 0 0.08203125 0 0 0 1 0',
    },
  },
  {
    title: 'Reputation',
    year: 2017,
    key: 'reputation',
    className: 'bg-eras-reputation',
    filter: {
      feColorMatrix: '0.4765625 0 0 0 0.0625 0.46875 0 0 0 0.04296875 0.4453125 0 0 0 0.07421875 0 0 0 1 0',
    },
  },
  {
    title: 'Lover',
    year: 2019,
    key: 'lover',
    className: 'bg-eras-lover',
    filter: {
      feColorMatrix: '0.89453125 0 0 0 0.06640625 0.68359375 0 0 0 0.03125 0.74609375 0 0 0 0.0703125 0 0 0 1 0',
    },
  },
  {
    title: 'Folklore',
    year: 2020,
    key: 'folklore',
    className: 'bg-eras-folklore',
    filter: {
      feColorMatrix: '0.76171875 0 0 0 0.0546875 0.76953125 0 0 0 0.0390625 0.73046875 0 0 0 0.0546875 0 0 0 1 0',
    },
  },
  {
    title: 'Evermore',
    year: 2020,
    key: 'evermore',
    className: 'bg-eras-evermore',
    filter: {
      feColorMatrix: '0.7421875 0 0 0 0.046875 0.6796875 0 0 0 0.02734375 0.53515625 0 0 0 0.06640625 0 0 0 1 0',
    },
  },
];

const Poster: React.FunctionComponent = () => {
  const { title, subTitle } = useApp();

  return (
    <div className="flex h-[480px] w-[300px] flex-col items-center gap-4 bg-white p-4 md:h-[800px] md:w-[500px] md:p-8">
      <div className="grid grid-cols-3 border-l-2 border-t-2 border-black">
        {ERAS.map(({ key, className, title, filter }) => (
          <Tile key={key} className={className} title={title} filter={filter} />
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-2 font-pistilli">
        <AutoTextSize
          mode="oneline"
          minFontSizePx={20}
          maxFontSizePx={160}
          fontSizePrecisionPx={0.1}
          className="scale-y-150 select-none uppercase leading-tight text-black"
        >
          {title}
        </AutoTextSize>
        <AutoTextSize
          mode="oneline"
          minFontSizePx={20}
          maxFontSizePx={160}
          fontSizePrecisionPx={0.1}
          className="select-none uppercase leading-tight text-black"
        >
          {subTitle}
        </AutoTextSize>
      </div>
    </div>
  );
};

export default Poster;
