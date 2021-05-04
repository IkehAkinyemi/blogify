import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllExpenses } from "../api";

function Posts() {
  useEffect(() => {
    getAllExpenses.then((res) => {
      setPosts(res);
      console.log(res);
    });
  }, []);

  const [posts, setPosts] = useState([]);
  const [visible, setVisibility] = useState(false);
  const handleDisplay = () => setVisibility(!visible);

  return (
    <Wrapper>
      <h3>My Recent Articles</h3>
      <div className="container">
        {posts &&
          posts.map((post) => (
            <div key={post.ref.id} id={post.ref.id}>
              <h4>{post.data.post.title}</h4>
              <em>{post.data.post.date}</em>
              <article>
                {post.data.post.mainContent}
                <p style={{ display: visible ? "block" : "none" }}>
                  {post.data.post.subContent}
                </p>
              </article>
              <button onClick={handleDisplay}>
                {visible ? "Show less" : "Show more"}
              </button>
            </div>
          ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 3rem;
  padding-left: 5rem;
  color: #23001e;

  & > .container {
    display: flex;
    flex-wrap: wrap;
  }

  & > .container > div {
    width: 50%;
    padding: 1rem;
    border: 2px dotted #ca9ce1;
    margin-bottom: 1rem;
    border-radius: 0.2rem;
  }

  & > .container > div > h4 {
    margin: 0px 0px 5px 0px;
  }

  & > .container > div > button {
    padding: 0.4rem 0.5rem;
    border: 1px solid #f2befc;
    border-radius: 0.3rem;
    background-color: #23001e;
    color: #ffffff;
    font-weight: medium;
    margin-top: 1rem;
    cursor: pointer;
  }

  & > .container > div > article {
    margin-top: 1rem;
  }
`;
export default Posts;
