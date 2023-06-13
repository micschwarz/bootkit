// Page load works

interface Result {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export const load = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const result = await response.json();
  return {
    joke: result as Result,
  };
};
