import { CreatePost } from "Models/Post.model";
import { createContext, useContext, useState } from "react";

type CreateContextProps = {
  data: CreatePost;
  setData: (payload: CreatePost) => void;
  clearData: () => void;
};

const defaultState = {
  data: {
    title: "",
    blocks: [],
    destination: {
      city: "",
      lat: 0,
      long: 0,
    },
    duration: [],
    alias: "",
    creatorUid: "",
    createdAt: new Date(),
  },
  setData: () => {},
  clearData: () => {},
};

const CreateContext = createContext<CreateContextProps>(defaultState);

export const useCreateContext = () => {
  const context = useContext(CreateContext);

  if (!context) {
    throw new Error("useUserContext must be used within a ToastProvider");
  }
  return context;
};

export const CreateProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CreatePost>(defaultState.data);

  const clearData = () => {
    setData(defaultState.data);
  };

  return (
    <CreateContext.Provider
      value={{
        data,
        setData,
        clearData,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
