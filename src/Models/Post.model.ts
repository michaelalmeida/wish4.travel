import { OutputBlockData } from "@editorjs/editorjs";

export type Destination = {
  city: string;
  lat: number;
  long: number;
};

export type Post = {
  id: string;
  title: string;
  alias: string;
  creatorUid: string;
  destination: Destination;
  blocks: OutputBlockData[];
  createdAt: Date;
  duration: any[];
  userRef?: string;
};

export type CreatePost = Omit<Post, "id">;
