import { View, Text } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../components/ui/customButton";
import { router } from "expo-router";
import IconFormField from "../../../../components/ui/iconFormField";

const AddSocials = () => {
  const [socialsValue, setSocialsValue] = useState({
    telegram: "",
    github: "",
    linkedin: "",
    x: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    router.push("./add-profile-photo");
  };

  return (
    <SafeAreaView className="bg-[#0a0a0a] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full p-6 min-h-[85vh]">
          <Text className="text-3xl my-6 text-left font-semibold text-white">
            Add socials
          </Text>
          <IconFormField
            title="Telegram"
            value={socialsValue.telegram}
            placeholder="x.com/......."
            icon="telegram"
          />
          <IconFormField
            title="Linkedin"
            value={socialsValue.linkedin}
            placeholder="x.com/......."
            icon="linkedin"
          />
          <IconFormField
            title="Github"
            value={socialsValue.github}
            placeholder="x.com/......."
            icon="github"
          />
          <IconFormField
            title="x"
            value={socialsValue.x}
            placeholder="x.com/......."
            icon="x"
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

export default AddSocials;
