import { useEffect, useState } from "react";
import { getArticlesByTag } from "../../api";

import NewsInfo from "../NewsInfo/NewsInfo";
import Wrapper from "../Wrapper/Wrapper";

import './Politics.scss';

function Politics () {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag("politics/politics");
        setArticles(data.data.response.results);
    }

    return (
        <div className="politics-page">
            <h1>Politics</h1>
            <Wrapper apiRequest={"politics/politics"} setArticles={setArticles}>
                {articles.map(article => {
                    return <NewsInfo article={article} />;
                })}
            </Wrapper>
        </div>
    );
}

export default Politics;