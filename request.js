const key = "cbe3dd267a18f6c89943b3eff94f1ed7";
//requestcity

const requestCity = async (city) => {
  const baseURL = "http://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${key}`;

  const response = await fetch(baseURL + query);

  const data = await response.json();
  return data;
};
