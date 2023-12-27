import { useApp } from '@/contexts/AppContext';
import { ArrowCircleUp } from '@phosphor-icons/react';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import { v4 } from 'uuid';

interface ITileProps {
  className?: string;
  title: string;
  era: string;
  filter?: {
    feColorMatrix: string;
  };
  color?: string;
}

const Tile: React.FC<ITileProps> = ({ className, era, title, filter }) => {
  const { images, setImage } = useApp();

  const tileImageUrl = React.useMemo(() => images.find(({ era: imgEra }) => era === imgEra), [images, era])?.imageUrl;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]), era);
    },
  });

  const id = React.useMemo(() => v4(), []);

  return (
    <div
      className={twMerge(
        'relative overflow-hidden',
        'aspect-square w-[86px] lg:w-[140px]',
        'border-b-2 border-r-2 border-black',
        className,
      )}
      aria-label={title}
    >
      {tileImageUrl && (
        <svg style={{ width: '100%', height: '100%' }}>
          <filter id={id} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values={filter?.feColorMatrix ?? '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'} />
          </filter>
          <image
            filter={`url(#${id})`}
            xlinkHref={tileImageUrl}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      )}

      <div
        {...getRootProps()}
        className={twMerge(
          'flex h-full w-full cursor-pointer items-center justify-center',
          'opacity-0 transition duration-150 ease-in-out hover:opacity-100',
          isDragActive && 'opacity-100',
        )}
      >
        <input {...getInputProps()} />
        <ArrowCircleUp size={48} weight="regular" />
      </div>
    </div>
  );
};

export default Tile;
