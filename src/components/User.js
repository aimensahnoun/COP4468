//React Native import
import { TouchableOpacity, View } from "react-native";

//Custom component import
import CustomText from "./CustomText";

//Assets import
import RightArrow from "../assets/icons/arrow-right.svg";

const User = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: "100%",
        height: 90,
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 3,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <CustomText fontSize={16} fontWeight="bold">
          Aimen Sahnoun
        </CustomText>
        <CustomText fontSize={13}>@AimenSahnoun</CustomText>
      </View>
      <RightArrow width={45} height={45} />
    </TouchableOpacity>
  );
};

export default User;
