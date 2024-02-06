import { API_KEY } from "./key";
import axios from "axios";

const getFormattedDate = () => {
    const now = new Date();
    return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
};

export const getArticlesByWord = async (word, page='1') => {
    const fromDate = getFormattedDate();
    const data = await axios.get(
        `https://content.guardianapis.com/search?page-size=12&q=${word}&page=${page}&to-date=${fromDate}&api-key=${API_KEY}`,
        {withCredentials: false}
    );
    return data;
}

export const getArticlesByTag = async (tag, page='1') => {
    const fromDate = getFormattedDate();
    const data = await axios.get(
        `https://content.guardianapis.com/search?page-size=12&to-date=${fromDate}&tag=${tag}&page=${page}&api-key=${API_KEY}`,
        {withCredentials: false}
    );
    return data;
}

export const getAllArticles = async (page = '1') => {
    const fromDate = getFormattedDate();
    const data = await axios.get(
        `https://content.guardianapis.com/search?page-size=12&to-date=${fromDate}&&page=${page}&api-key=${API_KEY}`,
        { withCredentials: false }
    );
    return data;
}

export const getArticlesById = async () => {
    const fromDate = getFormattedDate();
    const data = await axios.get(
        `https://content.guardianapis.com/search?page-size=1&q=Ukraine&from-date=${fromDate}&api-key=${API_KEY}`,
        {withCredentials: false},
        console.log({fromDate})
    );
    return data;
}
