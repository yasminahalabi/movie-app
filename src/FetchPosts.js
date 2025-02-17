import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// פונקציה לשליפת הפוסטים
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export function FetchPosts() {
  // שימוש ב-useQuery לשליפת הפוסטים
  const { data: posts, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // Cache יישמר למשך דקה לפני חידוש
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
