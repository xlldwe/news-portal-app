import newsImage from "./../../assets/images/hot-news.jpg";

import "./HotNews.scss";

function HotNews ({article}) {

    return (
        <div data-aos="fade-up" className="hot-news">
            <div className="hot-news__content">
                <h1>Hot Topics</h1>
                <img 
                    src={newsImage} 
                    alt="News" 
                    className="news-info__content-image"
                />
                    <div className="hot-news__content-date">
                        <a href={article.webUrl} key={article.id}>{article.webTitle}</a>
                    </div>
            </div>
        </div>
    );
}

export default HotNews;