import React, { useState, useEffect } from "react";
import trafficLights from "./trafficLightConfig";

const TrafficLight: React.FC = (): React.ReactElement => {
  const [activeSignal, setActiveSignal] = useState("red");

  useEffect(() => {
    const { duration, nextColor } = trafficLights[activeSignal];
    const timerId = setTimeout(() => {
      setActiveSignal(nextColor);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [activeSignal]);

  return (
    <div className='traffic-lights'>
      {Object.keys(trafficLights).map((light) => (
        <div
          className={`grey ${activeSignal === light ? activeSignal : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
