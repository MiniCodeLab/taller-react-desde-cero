import React, {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => null,
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Definimos el control que haremos sobre los datos del Provider
  const [theme, setTheme] = useState<ThemeContextType['theme']>(
    // Inicializamos el state de forma lazy para leer localStorage primero
    () => (localStorage.getItem('theme') as ThemeContextType['theme']) || 'dark'
  );

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  // Cada vez que theme cambie, lo guardo actualizado en localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
