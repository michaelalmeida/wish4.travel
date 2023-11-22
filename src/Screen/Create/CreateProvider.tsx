import { CreatePost, Post } from "Models/Post.model";
import { createContext, useContext, useState } from "react";

type CreateContextProps = {
  data: CreatePost | Post;
  setData: (payload: CreatePost) => void;
  clearData: () => void;
  postId: string;
  setPostId: (id: string) => void;
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
  postId: "",
  setPostId: () => {},
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
  const [postId, setPostId] = useState<string>("");

  const clearData = () => {
    setData(defaultState.data);
    setPostId("");
  };

  return (
    <CreateContext.Provider
      value={{
        data,
        setData,
        clearData,
        postId,
        setPostId,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
