import { useEffect, useState } from "react";
import { getArticlesByTag } from "../../api";

import NewsInfo from "../NewsInfo/NewsInfo";
import Wrapper from "../Wrapper/Wrapper";

import './Economy.scss';

function Economy () {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag("enterprise/enterprise");
        setArticles(data.data.response.results);
    }

    return (
        <div className="economy-page">
            <h1>Economy</h1>
            <Wrapper apiRequest={"enterprise/enterprise"} setArticles={setArticles}>
                {articles.map(article => {
                    return <NewsInfo article={article} />
                })}
            </Wrapper>
        </div>
    );
}

export default Economy;