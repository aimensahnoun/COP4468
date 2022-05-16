//React Native import
import { TouchableOpacity, View } from "react-native";

//Custom component import
import CustomText from "./CustomText";

//Assets import
import RightArrow from "../assets/icons/arrow-right.svg";
import Pen from "../assets/icons/pen.svg";

//Recoil import
import { useRecoilValue } from "recoil";
import { UsersState } from "../recoil/state";

const Post = ({ title, writerId, id, navigation }) => {
  //Recoil state
  const users = useRecoilValue(UsersState);

  //Helper functions
  const getWriterName = (id) => {
    const user = users.find((user) => user.id === id);
    return user.name;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostDetails", { id })}
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
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <View>
        <CustomText style={{ width: 250 }} fontSize={16} fontWeight="bold">
          {title}
        </CustomText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Pen width={25} height={25} />
          <CustomText fontSize={13} style={{ marginLeft: 10 }}>
            {getWriterName(writerId)}
          </CustomText>
        </View>
      </View>
      <RightArrow width={45} height={45} />
    </TouchableOpacity>
  );
};

export default Post;
