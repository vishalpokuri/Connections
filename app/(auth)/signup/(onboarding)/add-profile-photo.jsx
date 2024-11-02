import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../../../../components/ui/customButton";
import { router } from "expo-router";
const AddProfilePhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to open the image picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // square aspect ratio
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const submit = () => {
    setIsSubmitting(true);
    // Handle submission logic here
    // For now, reset the submit button after 2 seconds for demonstration
    setTimeout(() => setIsSubmitting(false), 2000);

    router.push("./onboardingComplete");
  };

  return (
    <SafeAreaView className="bg-[#0a0a0a] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full p-6 min-h-[85vh]">
          <Text className="text-3xl mt-6 mb-2 text-left font-semibold text-white">
            About Yourself
          </Text>
          <Text className="text-base mb-6 text-left font-semibold text-[#888]">
            Final step, We Promise !!
          </Text>
          <View className="items-center">
            <TouchableOpacity onPress={pickImage} className="mb-4">
              <View className="w-32 h-32 bg-gray-700 rounded-full justify-center items-center overflow-hidden">
                {selectedImage ? (
                  <Image
                    source={{ uri: selectedImage }}
                    className="w-full h-full rounded-full"
                    resizeMode="cover"
                  />
                ) : (
                  <Text className="text-white text-base">Upload Photo</Text>
                )}
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.textarea}
              multiline
              numberOfLines={6}
              placeholder="Who Am I?"
              className="border-[0.5px] border-solid border-[#888] rounded-md"
              placeholderTextColor="#888"
            />
          </View>

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

export default AddProfilePhoto;
const styles = StyleSheet.create({
  textarea: {
    height: 150, // You can adjust the height as needed
    width: "100%",
    padding: 10,
    backgroundColor: "#222",
    color: "#fff",
    fontSize: 16,
    borderRadius: 8,
    textAlignVertical: "top", // Keeps text at the top of the textarea
  },
});
