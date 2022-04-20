import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const title = "All BLogs";

   const [blogs, setBlogs] = useState([
       { title: "My new Website", body: "lorem ipsum...", author: "Sarila", "id": 1},
       { title: "Welcome Party!", body: "lorem ipsum...", author: "User", "id": 2},
       { title: "Farewell", body: "lorem ipsum...", author: "Ngakhusi", "id": 3}
   ])
    return (
        <div className="home">
            <Bloglist blogs= {blogs} title= {title} />
        </div>
    );
}

export default Home;