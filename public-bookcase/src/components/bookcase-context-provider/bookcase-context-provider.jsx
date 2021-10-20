import { createContext } from 'react';

export const BookcaseContext = createContext();

export const BookcaseContextProvider = ({children}) => {
    const test = 'Hello World !';
    return (
        <BookcaseContext.Provider value={{ test }}>
        	{children}
        </BookcaseContext.Provider>
    );
}

export default BookcaseContextProvider;