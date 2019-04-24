import axios from 'axios';

export const apiGetNews = async () => {
  const myArray = ['us', 'ru', 'lt', 'co', 'be', 'sk', 'si'];
  const rand = myArray[Math.floor(Math.random() * myArray.length)];
  const res = await axios
    .get(`https://newsapi.org/v2/top-headlines?country=${rand}&apiKey=2afacfeda5bf413a9dfc1e2a75b189e5`);
  return res;
};
