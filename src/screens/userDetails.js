//React native import
import { View, ScrollView, TouchableOpacity } from "react-native";

//Custom component import
import CustomText from "../components/CustomText";

//Assets import
import LeftArrow from "../assets/icons/arrow-left.svg";
import Phone from "../assets/icons/phone.svg";
import Map from "../assets/icons/map-marker.svg";
import Email from "../assets/icons/compose.svg";

const UserDetails = ({ navigation, route }) => {
  const { id } = route.params;

  console.log(id);

  return (
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
          <CustomText>Aimen Sahnoun</CustomText>
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
          <CustomText>Aimen.Sahnoun</CustomText>
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
          <CustomText>aimen@sahnoun.com</CustomText>
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
            My Adress My Adress My Adress My Adress My Adress{" "}
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
          <CustomText style={{ width: 250 }}>Phone Number </CustomText>
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
          <CustomText>aimen@sahnoun.com</CustomText>
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
          <CustomText style={{ width: 250 }}>
            My Adress My Adress My Adress My Adress My Adress{" "}
          </CustomText>
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
            My Adress My Adress My Adress My Adress My Adress{" "}
          </CustomText>
        </View>

        {/* Company Business*/}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomText fontWeight="medium" style={{ marginRight: 5 }}>
            Market:
          </CustomText>
          <CustomText style={{ width: 250 }}>
            My Adress My Adress My Adress My Adress My Adress{" "}
          </CustomText>
        </View>


      </View>
    </ScrollView>
  );
};

export default UserDetails;
