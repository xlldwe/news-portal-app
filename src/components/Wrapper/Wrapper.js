import { useState } from "react";
import { getArticlesByTag, getArticlesByWord } from "../../api";

import './Wrapper.scss';

function Wrapper (props) {

    const [currentPage, setCurrentPage] = useState(1);
    const pages = [1, 2, 3, 4, 5, 6];

    const getData = async (page ='1') => {
        const tagData = await getArticlesByTag(props.apiRequest, page);
        const wordData = await getArticlesByWord(props.apiRequest, page);
        const combinedResults = [
            ...tagData.data.response.results,
            ...wordData.data.response.results
        ];
        props.setArticles(combinedResults);
    }

    const clickHandler = (event) => {
        const selectedPage = parseInt(event.target.name, 6);
        if (selectedPage !== currentPage) {
            setCurrentPage(selectedPage);
            getData(event.target.name);
        }
    };

    return (
        <div data-aos="fade-up" className="wrapper">
            <div className="wrapper-frame">
                {props.children}    
            </div>
            <div data-aos="fade-up" className="wrapper-button">   
                {pages.map((page, index) => {
                        return (
                            <button
                                key={index}
                                name={page}
                                onClick={clickHandler}
                                className={page === currentPage ? 'active' : ''}
                            >{page}</button>
                        );
                    })}
            </div>
        </div>   
    )
}

export default Wrapper;