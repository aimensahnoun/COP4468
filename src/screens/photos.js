import axios from "axios";
import { useEffect, useState } from "react";

import { View, FlatList, Image, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import LoadingSpinner from "../components/loadingSpinner";
import * as Linking from "expo-linking";

import Link from "../assets/icons/link.svg";

const PhotosPage = ({ navigation, route }) => {
  const { id } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const photosResponse = await axios(
          "https://jsonplaceholder.typicode.com/photos"
        );

        const filteredPhotos = photosResponse.data.filter(
          (photo) => photo.albumId === id
        );
        setPhotos(filteredPhotos);
        setIsLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return !isLoading ? (
    <View>
      <FlatList
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 100,
        }}
        data={photos}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              marginBottom: 10,
              padding: 10,
              backgroundColor: "#f1f1f1",
              borderRadius: 10,
              elevation: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{
                width: 80,
                height: 80,
              }}
            />
            <View
              style={{
                marginLeft: 10,
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText>{item.title}</CustomText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.url);
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Link width={30} height={30} />
                <CustomText style={{ marginLeft: 10 }}>Open URL</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  ) : (
    <LoadingSpinner />
  );
};

export default PhotosPage;
