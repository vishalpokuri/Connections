import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import OrDivider from "../../../components/ui/orDivider";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../components/ui/customButton";
import FormField from "../../../components/ui/formField";
import { useState } from "react";
import OtherLogger from "../../../components/ui/otherLogger";
import { Link } from "expo-router";
const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className="bg-[#0a0a0a] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full p-6 min-h-[85vh]">
          <Text className="text-3xl my-6 text-left font-semibold text-white">
            Get your free Account
          </Text>
          <OtherLogger title="Google" />
          <OtherLogger title="Solana" />
          <OrDivider />
          <FormField
            title="Work Email"
            value={form.email}
            placeholder="hello123@gmail.com"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <CustomButton
            title="Continue with Email"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className="justify-center  pt-5 flex-row gap-2 items-center">
            <Text className="text-base text-gray-100">
              Already have an account?
            </Text>

            <Link href="/signin" className="text-[#a0f963] text-base">
              Login
            </Link>
          </View>
          {/* Or section, login with google and Login with Solana */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
