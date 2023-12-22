import * as React from 'react';
import { Tile } from '.';

interface IPosterProps {
  title: string;
  subTitle: string;
}

const ERAS = [
  { title: 'Taylor Swift', year: 2006, key: 'taylor-swift', className: 'bg-eras-taylor-swift' },
  { title: 'Fearless', year: 2008, key: 'fearless', className: 'bg-eras-fearless' },
  { title: 'Speak Now', year: 2010, key: 'speak-now', className: 'bg-eras-speak-now' },
  { title: 'Red', year: 2012, key: 'red', className: 'bg-eras-red' },
  {
    title: 'Midnight',
    year: 2022,
    key: 'midnight',
    className: 'bg-eras-midnight row-span-5 aspect-[1/3]',
  },
  { title: '1989', year: 2014, key: '1989', className: 'bg-eras-1989' },
  { title: 'Reputation', year: 2017, key: 'reputation', className: 'bg-eras-reputation' },
  { title: 'Lover', year: 2019, key: 'lover', className: 'bg-eras-lover' },
  { title: 'Folklore', year: 2020, key: 'folklore', className: 'bg-eras-folklore' },
  { title: 'Evermore', year: 2020, key: 'evermore', className: 'bg-eras-evermore' },
];

const Poster: React.FunctionComponent<IPosterProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-5 sm:p-10">
      <div className="grid grid-cols-3 border-l-2 border-t-2 border-black">
        {ERAS.map((era) => (
          <Tile key={era.key} className={era.className} title={era.title} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 font-pistilli">
        <h1 className="scale-y-150 select-none text-[47px] uppercase leading-tight text-black">{title}</h1>
        <h2 className="select-none text-[43px] uppercase leading-none text-black">{subTitle}</h2>
      </div>
    </div>
  );
};

export default Poster;
