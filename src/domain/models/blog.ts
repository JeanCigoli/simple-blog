export type Blog = {
  blogId: number;
  externalId: string;
  title: string;
  shortDescription: string;
  author: string;
  authorPhoto: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};
