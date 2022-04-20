const Home = () => {

    const handleClick = (name) => {
        console.log("hello," + name);
    }
    return (
        <div className="home">
            <h1>This is home component</h1>
            <button onClick={(e) => handleClick("sarila", e)}>Click me</button>
        </div>
    );
}

export default Home;