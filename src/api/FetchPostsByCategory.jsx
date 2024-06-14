import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../App";

import FlexedPostComponent from "../components/FlexedPostComponent";

function FetchPostsByCategory() {
  const [posts, setPosts] = useContext(PostContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://blog-api-backend-production-5dc1.up.railway.app/posts/category/${id}`,
      { mode: "cors" },
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPosts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id, setPosts]);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      {posts.map((post) => (
        <FlexedPostComponent
          key={post._id}
          postId={`/posts/${post._id}`}
          postImgPathId={`/posts/${post._id}`}
          postImgSrc={post.image_link}
          postCategory={post.category[0].category}
          postCategoryPathId={`/posts/category/${post.category[0]._id}`}
          postTitlePathId={`/posts/${post._id}`}
          postTitle={post.title}
          postBodyPathId={`/posts/${post._id}`}
          postBody={post.body}
        />
      ))}
    </div>
  );
}

export default FetchPostsByCategory;
