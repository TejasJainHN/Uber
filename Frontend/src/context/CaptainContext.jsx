import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext(null);

export const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginCaptain = async (credentials) => {
    try {
      setLoading(true);
      // Add your captain login logic here
      // Make API calls, etc.
      setCaptain(/* captain data */);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutCaptain = () => {
    setCaptain(null);
  };

  return (
    <CaptainDataContext.Provider 
      value={{
        setCaptain,
        captain,
        loading,
        setLoading,
        error,
        loginCaptain,
        logoutCaptain
      }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

