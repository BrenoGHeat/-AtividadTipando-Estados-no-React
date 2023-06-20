import { useEffect, useState } from "react"
import { api } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const {data} = await api.get("/news");
        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }
    loadPosts();
  }, [])


  return (
    <div className="App">
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>{post.author}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
