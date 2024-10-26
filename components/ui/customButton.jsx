import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  isLoading,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      className={`bg-white w-full px-4 my-4 h-[50px] justify-center items-center rounded-lg ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-lg font-extrabold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
