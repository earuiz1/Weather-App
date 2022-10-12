import React from "react";

const CurrentWeather = (props) => {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between bg-black rounded-lg max-w-xl mx-auto py-10 px-6">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-slate-50 text-4xl font-bold">{`${props.weatherInfo.city} , ${props.weatherInfo.country}`}</h3>
          <div className="flex flex-row justify-around items-center">
            <span className="text-slate-50 font-semibold text-xl a">
              {props.weatherInfo.description}
            </span>
            <img
              src={`http://openweathermap.org/img/wn/${props.weatherInfo.icon}.png`}
              alt="weather_icon"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-slate-50 font-semibold text-7xl">
            {`${props.weatherInfo.current_temp} °C`}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
