//React Native import
import { TouchableOpacity, View } from "react-native";

//Custom component import
import CustomText from "./CustomText";

//Assets import
import RightArrow from "../assets/icons/arrow-right.svg";

const User = ({ name, userName, id, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UsersDetails" , { id });
      }}
      activeOpacity={0.8}
      style={{
        width: "90%",
        height: 90,
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 3,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        marginVertical: 5,

        justifyContent: "space-between",
      }}
    >
      <View>
        <CustomText fontSize={16} fontWeight="bold">
          {name}
        </CustomText>
        <CustomText fontSize={13}>@{userName}</CustomText>
      </View>
      <RightArrow width={45} height={45} />
    </TouchableOpacity>
  );
};

export default User;
