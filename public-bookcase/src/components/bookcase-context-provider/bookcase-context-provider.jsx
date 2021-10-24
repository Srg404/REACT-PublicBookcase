import { createContext, useState } from 'react';

export const BookcaseContext = createContext();

export const BookcaseContextProvider = ({ children }) => {

  const [result, setResult] = useState([]);
  const setContextResult = (value) => {
    setResult(value);
  }
  
  const [active, setActive] = useState({
    recordid: null,
    name: null
  });

  const setContextActive = (value) => {
    setActive(value);
  }

  return (
    <BookcaseContext.Provider value={
      { result, setContextResult, active, setContextActive }
    }>
      {children}
    </BookcaseContext.Provider>
  );
}

export default BookcaseContextProvider;