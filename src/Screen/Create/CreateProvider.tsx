import { CreatePost } from "Models/Post.model";
import { createContext, useContext, useState } from "react";

type CreateContextProps = {
  data: CreatePost;
  setData: (payload: CreatePost) => void;
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

  return (
    <CreateContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
