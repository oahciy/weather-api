const Weather = require("./weather");

describe("Weather", () => {
  it("gets the weather data fetched by the Api class", () => {
    const mockApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          main: {
            temp: 15.6,
            feels_like: 16.2,
            humidity: 64,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          name: "Bristol",
        });
      },
    };
    const weather = new Weather(mockApi);
    weather.fetch("Bristol");
    expect(weather.getWeatherData()).toEqual({
      main: {
        temp: 15.6,
        feels_like: 16.2,
        humidity: 64,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      name: "Bristol",
    });
  });
});
