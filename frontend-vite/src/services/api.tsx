import axios from "axios";

export interface Post {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
}

const API_URL = "http://localhost:3000"; // Change this if your backend runs elsewhere

export const getPosts = () => axios.get<Post[]>(`${API_URL}/posts`);
export const createPost = (post: { title: string; content: string }) =>
  axios.post<Post>(`${API_URL}/posts`, post);
export const updatePost = (
  id: string,
  post: { title?: string; content?: string }
) => axios.put<Post>(`${API_URL}/posts/${id}`, post);
