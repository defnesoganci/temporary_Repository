import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../models/Book'; // Adjust the path as necessary

interface LibraryContextType {
  library: Book[];
  addToLibrary: (book: Book) => void;
  removeFromLibrary: (id: string) => void; // Add this line
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};

interface LibraryProviderProps {
  children: ReactNode;
}

export const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
  const [library, setLibrary] = useState<Book[]>([]);

  const addToLibrary = (book: Book) => {
    if (!library.some(b => b.id === book.id)) {
      console.log("Adding book to library:", book);
      setLibrary(currentLibrary => [...currentLibrary, book]);
    } else {
      console.log("Book already exists in library:", book);
    }
  };
  

  // Implement the removeFromLibrary function
  const removeFromLibrary = (id: string) => {
    setLibrary((currentLibrary) => {
      const updatedLibrary = currentLibrary.filter(book => book.id !== id);
      console.log("Library after removal:", updatedLibrary);
      return updatedLibrary;
    });
  };
  

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};