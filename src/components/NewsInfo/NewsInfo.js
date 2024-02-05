import { format } from 'date-fns';

import newsImage from "./../../assets/images/news.jpg";
import calendarImage from "../../assets/images/calendar.png";
import clockImage from "../../assets/images/clock.png";

import './NewsInfo.scss';

function NewsInfo ({article, isSearchPage, searchWord}){

    const cleanDateStr = article.webPublicationDate.replace(/Z|T/g, ' ');

    const publicationDate = new Date(cleanDateStr);

    const formattedDate = format(publicationDate, 'yyyy-MM-dd');

    const formattedDate2 = format(publicationDate, 'HH:mm');


    return (
        <div data-aos="fade-up" className="news-info">
            {isSearchPage 
                ? <div className="news-info-container">
                    <div className="news-info__wrapper">
                        <img 
                            src={newsImage} 
                            alt="News" 
                            className="news-info__wrapper-image"
                        />
                        <a href={article.webUrl} key={article.id}>
                            <span
                                dangerouslySetInnerHTML={{
                                __html: article.webTitle.replace(
                                    new RegExp(searchWord, "gi"),
                                    (match) => `<span style="background-color: yellow">${match}</span>`
                                ),
                                }}
                            />
                        </a>
                    </div>
                    <div className="news-info-container-date">
                        <div>
                            <img 
                                src={calendarImage}
                                alt="calendar" 
                            />
                            {formattedDate}
                        </div>
                        <div className="m-hide">
                            <img 
                                src={clockImage}
                                alt="clock" 
                            />
                            {formattedDate2}
                        </div>
                    </div>
                </div>
                : <div className="news-info-container">
                    <div className="news-info__wrapper">
                        <img 
                            src={newsImage} 
                            alt="News" 
                            className="news-info__wrapper-image"
                        />
                        <a href={article.webUrl} key={article.id}>{article.webTitle}</a>
                    </div>
                    <div className="news-info-container-date">
                        <div>
                            <img 
                                src={calendarImage}
                                alt="calendar" 
                            />
                            {formattedDate}
                        </div>
                        <div className="m-hide">
                            <img 
                                src={clockImage}
                                alt="clock" 
                            />
                            {formattedDate2}
                        </div>
                    </div>
                </div>
            }
        </div>
    ); 
}

export default NewsInfo;