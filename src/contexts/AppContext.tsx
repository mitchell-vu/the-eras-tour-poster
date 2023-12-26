import ERAS from '@/constants/eras';
import React, { createContext, useCallback, useContext, useMemo } from 'react';

interface AppContextValue {
  title: string;
  setTitle: (title: string) => void;
  subTitle: string;
  setSubTitle: (subTitle: string) => void;
  images: Image[];
  setImage: (imageUrl: string, era: string) => void;
}

export const AppContext = createContext<AppContextValue>({
  title: '',
  setTitle: () => {},
  subTitle: '',
  setSubTitle: () => {},
  images: [],
  setImage: () => {},
});
// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => useContext(AppContext);

interface IAppProviderProps {
  children?: React.ReactNode;
}

type Image = {
  imageUrl: string | null;
  era: string;
};

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [title, setTitle] = React.useState('Taylor Swift');
  const [subTitle, setSubTitle] = React.useState('The Eras Tour');
  const [images, setImages] = React.useState<Image[]>(ERAS.map(({ key }) => ({ imageUrl: null, era: key })));

  const setImage = useCallback(
    (imageUrl: string, era: string) => {
      setImages((prevImages: Image[]) => {
        const newImages = [...prevImages];
        const imageIndex = newImages.findIndex(({ era: imgEra }) => imgEra === era);

        newImages[imageIndex].imageUrl = imageUrl;
        return newImages;
      });
    },
    [setImages],
  );

  const contextValue = useMemo(
    () => ({
      title,
      setTitle,
      subTitle,
      setSubTitle,
      setImage,
      images,
    }),
    [title, setTitle, subTitle, setSubTitle, setImage, images],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
