import { View, Text } from "react-native";
import React, { useState } from "react";
import FormField from "../../../../components/ui/formField";
import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../components/ui/customButton";

import { router } from "expo-router";
const CreateUsername = () => {
  const [usernameValue, setusernameValue] = useState("@");
  const [nameValue, setnameValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    router.push("./add-socials");
  };
  return (
    <SafeAreaView className="bg-[#0a0a0a] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full p-6 min-h-[85vh]">
          <Text className="text-3xl mt-6 mb-2 text-left font-semibold text-white">
            Get Started
          </Text>
          <Text className="text-base mb-6 text-left font-semibold text-[#888]">
            Welcome aboard! Create a unique username and enter your name to
            join.
          </Text>
          <FormField
            title="Username"
            value={usernameValue}
            placeholder="@johnDoe"
            otherStyles="mt-4"
          />
          <FormField
            title="Your Name"
            value={nameValue}
            placeholder="John Doe"
            otherStyles="mt-4"
          />
          <CustomButton
            title="Continue"
            handlePress={submit}
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateUsername;
