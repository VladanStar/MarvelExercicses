import md5 from "md5";

const PUBLIC_KEY = "cf147e304056a973462499001286f73a";
const PRIVATE_KEY = "5c9bf3b2ec31a45d375bb4d439ee726b4286e8b2";

const ts = new Date().getTime();
const md5Hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const url = 'https://gateway.marvel.com/v1/public/characters';
const authUrl = `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`

export const getCharacters = async () => {
  const request = await fetch(url + authUrl);
  const response = await request.json();
  const result = await response.data.results;
  return result;
};


export const getSearchedHeroes = async (searchedString) => {
  const entireUrl = url + authUrl;
  const searchedHeroesUrl = searchedString === '' ? entireUrl : `${entireUrl}&nameStartsWith=${searchedString}`
  const request = await fetch(searchedHeroesUrl);
  const response = await request.json();
  const result = await response.data.results;
  return result;
}


// fetch single character

export const getSingleHero = async (id) => {
  const request = await fetch(`${url}/${id}${authUrl}`);
  const response = await request.json();
  const result = await response.data.results[0];
  return result;
}


// fetch list of comics filtered by a character id

export const getComics = async (id) => {
  const request = await fetch(`${url}/${id}/comics${authUrl}`);
  const response = await request.json();
  const result = await response.data.results;
  return result.slice(0, 6);
};