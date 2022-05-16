//React import
import { useEffect, useState } from "react";

//React native import
import { View, ScrollView, TouchableOpacity } from "react-native";

//Custom component import
import CustomText from "../components/CustomText";
import LoadingSpinner from "../components/loadingSpinner";

//Dependencies import
import * as Linking from "expo-linking";

//Assets import
import LeftArrow from "../assets/icons/arrow-left.svg";
import Phone from "../assets/icons/phone.svg";
import Map from "../assets/icons/map-marker.svg";
import Email from "../assets/icons/compose.svg";

const UserDetails = ({ navigation, route }) => {
  const { id } = route.params;

  //Use state
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Use effect
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();

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
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 120,
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
      </View>
    </ScrollView>
  ) : (
    <LoadingSpinner />
  );
};

export default UserDetails;
