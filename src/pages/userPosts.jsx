import Cookies from "js-cookie";
import "../global.css";
import styles from "../styles/UserPost.module.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";

import { getUserById } from "../service/userService";
import parseJwt from "../utils/parseJWT";
import { useNavigate } from "react-router-dom";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { FilterContext } from "../contexts/FilterContext";

function UserPosts() {
  const navigate = useNavigate();
  const { userFiltered } = useContext(FilterContext);
  const token = Cookies.get("reactauth.token");
  const [user, setUser] = useState([]);
  console.log(userFiltered.id);
  useEffect(() => {
    (async () => {
      const data = await getUserById(userFiltered.id);
      setUser(data);
    })();
  }, []);
  console.log(user);
  //   async function fetchPosts() {
  //     const id = parseJwt(token).id;
  //     const data = await getUserById(id);
  //     return setPost(data);
  //   }

  //   useEffect(() => {
  //     (async () => {
  //       if (token) {
  //         const id = parseJwt(token).id;
  //         const post = await getUserById(id);
  //         setPost(post);
  //       } else {
  //         navigate("/");
  //       }
  //     })();
  //   }, [token, navigate]);

  return (
    <div className="App">
      {/* <Header />
      <div className={styles.wrapper}>
        <SideBar userId={user?.id} />

        <main>
          {post?.post?.map((userPost) => {
            return (
              <Post
                key={userPost.id}
                postId={userPost.id}
                userId={userPost.user.id}
                userName={userPost.user.name}
                userProfession={userPost.user.profession}
                content={userPost.content}
                comment={userPost.comment}
                pusblishedAt={userPost.created_at}
                updatingState={fetchPosts}
              />
            );
          })}
        </main>
      </div> */}
    </div>
  );
}

export { UserPosts };
