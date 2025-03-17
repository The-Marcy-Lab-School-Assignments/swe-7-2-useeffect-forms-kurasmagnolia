/**
 * This component is meant to display gifs. However, there are two different sets of gifs that this component can display, depending on the user's actions. At first, they should see trending gifs but after submitting a search term in the GifSearch form, they should see gifs related to their search.
 *
 * TODO:
 * - use the getTrendingGifs adapter to fetch trending gifs on the first render
 * - each time the user submits the form in GifSearch, use the getGifsBySearch adapter to fetch gifs according to the search term.
 * - render the list of fetched gifs (or the defaultGifs) as list items with an `img` inside. Remember to give each list item a unique key!
 * - Bonus: if at any point an error is returned, render the default gifs again.
 *
 * @format
 */

import defaultGifs from '../gifs.json';
import { getGifsBySearch, getTrendingGifs } from '../adapters/giphyAdapters';
import { useEffect, useState } from 'react';

const GifContainer = ({ searchTerm }) => {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const doFetch = async () => {
      const [gifs, error] = await getTrendingGifs();
      if (gifs) setGifs(gifs);
      if (error) {
        setError(error);
        setGifs(defaultGifs);
      }
    };
    doFetch();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setGifs(defaultGifs);
      return;
    }

    const doFetch = async () => {
      const [gifs, error] = await getGifsBySearch(searchTerm);
      if (gifs) setGifs(gifs);
      if (error) {
        setError(error);
        setGifs(defaultGifs);
      }
    };

    doFetch();
  }, [searchTerm]);

  return (
    <ul>
      {(error ? defaultGifs : gifs).map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.alt_text || 'gif'} />
        </li>
      ))}
    </ul>
  );
};

export default GifContainer;
