export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2ac4e9495bmsh8670fde122de89bp10346fjsn58de9229ad06',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2ac4e9495bmsh8670fde122de89bp10346fjsn58de9229ad06',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data;
}