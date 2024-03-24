type Lights = {
  backgroundColor: string,
  duration: number,
  nextColor: string,
};

type trafficLightsTypes = {
  [key: string]: Lights,
};

const trafficLights: trafficLightsTypes = {
  red: {
    backgroundColor: "red",
    duration: 4000,
    nextColor: "yellow",
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 500,
    nextColor: "green",
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    nextColor: "red",
  },
};

export default trafficLights;
