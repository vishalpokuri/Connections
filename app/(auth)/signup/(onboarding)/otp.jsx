import { View, Text } from "react-native";
import React, { useState } from "react";
import FormField from "../../../../components/ui/formField";
import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../components/ui/customButton";

import { router } from "expo-router";
import OTPResend from "../../../../components/ui/OTPresend";
const Otp = () => {
  const [otpValue, setOtpValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    router.push("./create-username");
  };
  return (
    <SafeAreaView className="bg-[#0a0a0a] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full p-6 min-h-[85vh]">
          <Text className="text-3xl my-6 text-left font-semibold text-white">
            Enter OTP
          </Text>
          <FormField
            title="OTP"
            value={otpValue}
            placeholder=""
            otherStyles="mt-4"
            keyboardType="number-pad"
          />
          <CustomButton
            title="Continue"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <OTPResend />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otp;
