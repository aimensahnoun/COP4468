//React import
import { useEffect, useState } from "react";

//React native import
import { View, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

//Custom component import
import CustomText from "../components/CustomText";
import LoadingSpinner from "../components/loadingSpinner";

//Dependencies import
import * as Linking from "expo-linking";
import axios from "axios";

//Assets import
import LeftArrow from "../assets/icons/arrow-left.svg";
import Phone from "../assets/icons/phone.svg";
import Map from "../assets/icons/map-marker.svg";
import Email from "../assets/icons/compose.svg";
import RightArrow from "../assets/icons/arrow-right.svg";

const UserDetails = ({ navigation, route }) => {
  const { id } = route.params;

  //Use state
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [userAlbums, setUserAlbums] = useState([]);

  //Use effect
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.data;

        const albumsResponse = await axios(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const albumsData = await albumsResponse.data;

        const filteredAlbums = albumsData.filter(
          (album) => album.userId === id
        );

        setUserAlbums(filteredAlbums);

        setUser(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, []);

  return !isLoading ? (
    <ScrollView
      nestedScrollEnabled={true}
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {/* Header */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.pop()}>
          <LeftArrow width={40} height={40} />
        </TouchableOpacity>

        {/* User Details */}
        <CustomText fontWeight="bold" fontSize={18}>
          Personal Information
        </CustomText>

        {/* Name Row */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Name:
          </CustomText>
          <CustomText>{user?.name}</CustomText>
        </View>

        {/* Username Row */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Username:
          </CustomText>
          <CustomText>@{user?.username}</CustomText>
        </View>

        {/* Email Row*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Email:
          </CustomText>
          <CustomText>{user?.email}</CustomText>
        </View>

        {/* Address Row Row*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Address:
          </CustomText>
          <CustomText style={{ width: 250 }}>
            {user?.address?.street}, {user?.address?.suite} ,{" "}
            {user?.address?.city}
          </CustomText>
        </View>

        {/* Phone Row*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Phone:
          </CustomText>
          <CustomText style={{ width: 250 }}>
            {user?.phone.split(" ")[0]}{" "}
          </CustomText>
        </View>

        {/* Action Buttons Row*/}
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Phone call button */}
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${user?.phone.split(" ")[0]}`)}
            activeOpacity={0.8}
            style={{
              width: 100,
              height: 50,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Phone width={20} height={20} />
              <CustomText style={{ marginLeft: 5 }}>Call</CustomText>
            </View>
          </TouchableOpacity>

          {/* Email button */}
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${user?.email}`)}
            activeOpacity={0.8}
            style={{
              width: 100,
              height: 50,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Email width={20} height={20} />
              <CustomText style={{ marginLeft: 5 }}>Email</CustomText>
            </View>
          </TouchableOpacity>

          {/* Map button */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${user?.address?.geo?.lat},${user?.address?.geo?.lng}`
              )
            }
            activeOpacity={0.8}
            style={{
              width: 100,
              height: 50,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Map width={20} height={20} />
              <CustomText style={{ marginLeft: 3 }}>Navigate</CustomText>
            </View>
          </TouchableOpacity>
        </View>

        {/* Company Details */}
        <CustomText fontWeight="bold" fontSize={18}>
          Company Information
        </CustomText>
        {/* Website Row*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Website:
          </CustomText>
          <CustomText>{user?.website}</CustomText>
        </View>

        {/* Company Name Row*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Name:
          </CustomText>
          <CustomText style={{ width: 250 }}>{user?.company?.name}</CustomText>
        </View>

        {/* Company Slogan Row*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Slogan:
          </CustomText>
          <CustomText style={{ width: 250 }}>
            {user?.company?.catchPhrase}
          </CustomText>
        </View>

        {/* Company Business*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Business:
          </CustomText>
          <CustomText style={{ width: 250 }}>{user?.company?.bs}</CustomText>
        </View>

        <View
          style={{
            width: "70%",
            alignSelf: "center",
            marginVertical: 20,
            backgroundColor: "#f1f1f1",
            height: 60,
            elevation: 5,
            borderRadius: 10,
            padding: 5,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {/* Albums */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setTabIndex(0)}
            style={{
              width: "48%",
              height: "100%",
              backgroundColor: tabIndex === 0 ? "#000" : "transparent",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText
              fontWeight={tabIndex === 0 ? "bold" : "normal"}
              style={{ color: tabIndex === 0 ? "#fff" : "#000" }}
            >
              Albums
            </CustomText>
          </TouchableOpacity>
          {/* TODO */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setTabIndex(1)}
            style={{
              width: "48%",
              height: "100%",
              backgroundColor: tabIndex === 1 ? "#000" : "transparent",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText
              fontWeight={tabIndex === 1 ? "bold" : "normal"}
              style={{ color: tabIndex === 1 ? "#fff" : "#000" }}
            >
              TODO
            </CustomText>
          </TouchableOpacity>
        </View>
        {
          tabIndex === 0 &&
          <FlatList
            data={userAlbums}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomText
                  style={{
                    width: "80%",
                  }}
                >
                  {item.title}
                </CustomText>
                <RightArrow width={45} height={45} />
              </TouchableOpacity>
            )}
          />
        }
      </View>
    </ScrollView>
  ) : (
    <LoadingSpinner />
  );
};

export default UserDetails;
