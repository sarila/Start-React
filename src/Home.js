import { useState } from "react";

const Home = () => {

   const [blogs, setBlogs] = useState([
       { title: "My new Website", body: "lorem ipsum...", author: "Sarila", "id": 1},
       { title: "Welcome Party!", body: "lorem ipsum...", author: "User", "id": 2},
       { title: "Farewell", body: "lorem ipsum...", author: "Ngakhusi", "id": 3}
   ])
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            )) }
        </div>
    );
}

export default Home;