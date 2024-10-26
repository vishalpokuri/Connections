import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/ui/customButton";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
export default function Index() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className="bg-[#0a0a0a] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full p-6"></View>
        <CustomButton
          title="SignIn"
          handlePress={() => router.push("/signin")}
        />
      </ScrollView>
      <StatusBar backgroundColor="#0a0a0a" style="light" />
    </SafeAreaView>
  );
}
