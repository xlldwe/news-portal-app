import { useEffect, useState } from "react";
import { getArticlesByTag } from "../../api";

import NewsInfo from "../NewsInfo/NewsInfo";
import Wrapper from "../Wrapper/Wrapper";

import './Media.scss';

function Media () {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag("media/media");
        setArticles(data.data.response.results);
    }

    return (
        <div className="media-page">
            <h1>Media</h1>
            <Wrapper apiRequest={"media/media"} setArticles={setArticles}>
                {articles.map(article => {
                    return <NewsInfo article={article} />;
                })}
            </Wrapper>
        </div>
    );
}

export default Media;