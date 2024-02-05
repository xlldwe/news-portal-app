import { useState, useEffect} from "react";
import { getArticlesByWord, getAllArticles, getArticlesById } from '../../api';

import NewsInfo from "../NewsInfo/NewsInfo";
import Wrapper from "../Wrapper/Wrapper";
import searchImage from "../../assets/images/search.svg"
import HotNews from "../HotNews/HotNews";

import './MainPage.scss';

function MainPage () {

    const [articles, setArticles] = useState([]);
    const [articlesId, setArticlesId] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (searchWord !== "") {
            getData(searchWord);
        } else {
            getAllData();
            getIdData();
        }
    }, [searchWord]);

    const getData = async (word) => {
        const data = await getArticlesByWord(word);
        setArticles(data.data.response.results);
    }

    const getAllData = async () => {
        const data = await getAllArticles();
        setArticles(data.data.response.results);
    };

    const getIdData = async () => {
        const data = await getArticlesById();
        setArticlesId(data.data.response.results);
    };

    const inputHandler = (e) => {
        setSearchWord(e.target.value);
    }

    const handleFocus = () => {
        setIsFocused(true);
    };
    
    const handleBlur = () => {
        setIsFocused(false);
    };

    return(
        <>
            <div className="main-page">
                <div className="main-page__container">
                    {articlesId.map(article => {
                        return <HotNews setArticles={setArticlesId} key={article.id} article={article}/>;
                    })}
                </div>
                <div className="main-page__wrapper">
                    <h1 data-aos="fade-right">Last News</h1>
                    <div data-aos="fade-left" className={`main-page__wrapper-search ${isFocused ? 'focused' : ''}`}>
                        <input
                            placeholder={isFocused ? '' : 'Search'}
                            value={searchWord}
                            onChange={inputHandler}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <button onClick={() => getData(searchWord)}><img src={searchImage} alt="search icon" /></button>
                    </div>
                </div>
            </div>
            <Wrapper setArticles={setArticles}>
                {articles.map(article => {
                    return <NewsInfo key={article.id} article={article} isSearchPage={true} searchWord={searchWord}/>;
                })}
            </Wrapper>
        </>
    );
}

export default MainPage;