import { useEffect, useState } from "react";
import { getArticlesByTag } from "../../api";

import NewsInfo from "../NewsInfo/NewsInfo";
import Wrapper from "../Wrapper/Wrapper";

import './Sport.scss';

function Sport () {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag("sport/sport");
        setArticles(data.data.response.results);
    }

    return (
        <div className="sport-page">
            <h1>Sport</h1>
            <Wrapper apiRequest={"sport/sport"} setArticles={setArticles}>
                {articles.map(article => {
                    return <NewsInfo article={article} />;
                })}
            </Wrapper>
        </div>
    );
}

export default Sport;