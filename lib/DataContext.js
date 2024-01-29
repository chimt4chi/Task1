import { createContext, useContext } from "react";

export const DataContext = createContext({
  data: [
    {
      id: Date.now(),
      text: "Test Text",
      completed: false,
    },
  ],
  addText: (todo) => {},
  editText: (id, todo) => {},
  deleteText: (id) => {},
  addImage: (image) => {},
  editImage: (id, image) => {},
  deleteImage: (id) => {},
});

export const DataProvider = DataContext.Provider;

// export const useData = () => {
//   return useContext(DataContext);
// };

export default { DataContext, DataProvider };
