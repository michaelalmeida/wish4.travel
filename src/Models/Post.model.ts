type Destination = {
  country: string;
  city: string;
  lat: number;
  long: number;
  short_code: string;
};

type Block = {
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
  post: Block[];
  createdAt: Date;
};

export type CreatePost = Omit<Post, "id">;
