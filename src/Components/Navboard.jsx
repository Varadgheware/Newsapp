import Newsitem from "./Newsitem";
import { useEffect, useState } from "react";

function Navboard({ categeory }) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?category=${categeory}&apiKey=d49954ca95a247289fef246ba5dde3b3`;
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch news");
                return response.json();
            })
            .then(data => {
                setArticles(data.articles || []);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setArticles([]);
                console.log("error while fetching", error);
            });
    }, [categeory]);

    return (
        <div>
            <h1 className="text-center">Latest <span className="badge text-bg-danger">News</span></h1>
            {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "flex-start"
            }}>
                {articles.map((home, index) => (
                    <Newsitem
                        key={index}
                        title={home.title}
                        description={home.description}
                        src={home.urlToImage}
                        url={home.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Navboard;