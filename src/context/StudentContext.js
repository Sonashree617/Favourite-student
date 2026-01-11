import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (student) => {
    if (!favourites.includes(student)) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFavourite = (student) => {
    setFavourites(favourites.filter((s) => s !== student));
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addToFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
};
