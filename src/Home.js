import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const title = "All BLogs";

   const [blogs, setBlogs] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
       setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data');
            }
            return res.json();

        })
        .then((data) => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
            // console.log(err.message);
        })
       }, 1000)
   }, []);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading.....</div>}
            {blogs && <Bloglist blogs= {blogs} title= {title} />}
        </div>
    );
}

export default Home;