import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
// console.log("deviceHeight", deviceHeight);
// console.log("deviceHeight", deviceWidth);
export const hp = (percentage) => {
  console.log("hp:", (percentage / 100) * deviceHeight);
  return (percentage / 100) * deviceHeight;
};

export const wp = (percentage) => {
  console.log("wp:", (percentage / 100) * deviceWidth);
  return (percentage / 100) * deviceWidth;
};
