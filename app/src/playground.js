/** @format */

// Import your adapter functions here

import { handleFetch } from './adapters/handleFetch.js';
import { getTrendingGifs, getGifsBySearch } from './adapters/giphyAdapters.js';

// const testHandleFetch = async () => {
//   const [data, error] = await handleFetch(
//     'https://dog.ceo/api/breeds/image/random'
//   );
//   if (error) {
//     return console.log(error);
//   }
//   console.log(data);
// };

// Test your adapter functions here
const testAdapters = async () => {
  const trendingTuple = await getTrendingGifs();
  const searchTuple = await getGifsBySearch();

  console.log(trendingTuple);
  // console.log(searchTuple);
};

// testHandleFetch();
testAdapters();
