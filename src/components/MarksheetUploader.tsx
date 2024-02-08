import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PrimaryButton from "./PrimaryButton";

export default function MarksheetUploader() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      fetch("localhost:3000", {
        method: "post",
        body: JSON.stringify(result.assets[0].uri),
      });
    }
  };

  const onManualEnter = () => {};

  const onSubmit = () => {
    console.log(image);
    fetch("http://localhost:3000/", {
      body: JSON.stringify({ 1: 2 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Upload Image" onPress={pickImage} />
      <Button title="Enter manually" onPress={onManualEnter} />
      {image && (
        <>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          <PrimaryButton label="Continue" onPress={onSubmit} />
        </>
      )}
    </View>
  );
}
