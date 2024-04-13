import { useState, useEffect } from 'react';

const useWord = () => {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState('');
  const [wordLength, setWordLength] = useState(5); // Assuming a default word length of 5

  useEffect(() => {
    const fetchWord = async () => {
      setLoading(true);
      const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`);
      const json = await response.json();
      setWord(json[0]);
      setLoading(false);
    };

    fetchWord();
  }, [wordLength]);

  return { loading, word, wordLength, setWordLength };
};

export default useWord;
