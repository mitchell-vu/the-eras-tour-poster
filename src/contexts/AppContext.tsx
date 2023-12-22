import React, { createContext, useContext, useMemo } from 'react';

interface AppContextValue {
  title: string;
  setTitle: (title: string) => void;
  subTitle: string;
  setSubTitle: (subTitle: string) => void;
}

export const AppContext = createContext<AppContextValue>({
  title: '',
  setTitle: () => {},
  subTitle: '',
  setSubTitle: () => {},
});
// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => useContext(AppContext);

interface IAppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [title, setTitle] = React.useState('Taylor Swift');
  const [subTitle, setSubTitle] = React.useState('The Eras Tour');

  const contextValue = useMemo(
    () => ({
      title,
      setTitle,
      subTitle,
      setSubTitle,
    }),
    [title, setTitle, subTitle, setSubTitle],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
