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

export default useData = () => {
  return useContext(DataContext);
};
