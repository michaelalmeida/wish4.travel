import { OutputBlockData } from "@editorjs/editorjs";

export type Destination = {
  city: string;
  lat: number;
  long: number;
};

export type Block = {
  id: string;
  type: string;
  data: any;
};

export type Post = {
  id: string;
  title: string;
  alias: string;
  creatorUid: string;
  destination: Destination;
  userRef: string;
  blocks: OutputBlockData[];
  createdAt: Date;
  duration: any;
};

export type CreatePost = Omit<Post, "id">;
