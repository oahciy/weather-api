const Weather = require("./weather");

describe("Weather", () => {
  it("gets the weather data fetched by the Api class", () => {
    const mockApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          coord: { lon: -71.1662, lat: 41.8334 },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          base: "stations",
        });
      },
    };
    const weather = new Weather(mockApi);
    weather.fetch("Bristol");
    expect(weather.getWeatherData()).toEqual({
      coord: { lon: -71.1662, lat: 41.8334 },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      base: "stations",
    });
  });
});
