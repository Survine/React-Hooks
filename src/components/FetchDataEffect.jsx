import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      if (data && data.length > 0) setPost(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {post.map((item) => (
          <>
            <li><strong>Title:</strong> {item.title}</li>
            <p>Body: {item.body}</p>
          </>
        ))}
      </ul>
    </div>
  );
};
export default FetchDataEffect;