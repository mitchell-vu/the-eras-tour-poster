import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 } from 'uuid';

interface ITileProps {
  className?: string;
  title: string;
  filter?: {
    feColorMatrix: string;
  };
}

const Tile: React.FunctionComponent<ITileProps> = ({ className, title, filter }) => {
  const [imageUrl, setImageUrl] = React.useState<string>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files[0]) {
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const id = React.useMemo(() => v4(), []);

  return (
    <div
      className={twMerge(
        'relative overflow-hidden',
        'aspect-square w-[86px] md:w-[140px]',
        'border-b-2 border-r-2 border-black',
        className,
      )}
      aria-label={title}
    >
      {imageUrl && (
        <svg className="h-full w-full">
          <filter id={id} color-interpolation-filters="sRGB">
            <feColorMatrix type="matrix" values={filter?.feColorMatrix ?? '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'} />
          </filter>
          <image filter={`url(#${id})`} xlinkHref={imageUrl} x="0" y="0" width="100%" height="100%"></image>
        </svg>
      )}
      <input type="file" className="absolute left-0 top-0 h-full w-full opacity-0" onChange={handleInputChange} />
    </div>
  );
};

export default Tile;
