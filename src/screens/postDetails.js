//React import
import { useEffect, useState } from "react";

//React Native import
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

//Custom Component import
import CustomText from "../components/CustomText";
import LoadingSpinner from "../components/loadingSpinner";

//Recoil import
import { useRecoilValue } from "recoil";
import { UsersState } from "../recoil/state";

//Assets import
import LeftArrow from "../assets/icons/arrow-left.svg";
import Pen from "../assets/icons/pen.svg";

const PostDetails = ({ navigation, route }) => {
  const { id } = route.params;

  //Use state
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  //Recoil state
  const users = useRecoilValue(UsersState);

  //useEffect
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        const data = await response.json();

        setPost(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!post) return;
    const user = users.find((items) => items.id === post.userId);
    setAuthor(user);
  }, [post]);

  return !isLoading ? (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      contentContainerStyle={{
        paddingBottom: 100,
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 20,
          flex: 1,
          height: "100%",
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,

            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.pop()}
          >
            <LeftArrow width={40} height={40} />
          </TouchableOpacity>
          <CustomText fontWeight="bold" style={{ width: 280 }} fontSize={18}>
            {post?.title}
          </CustomText>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          {/* Body */}
          <Text style={{ fontFamily: "Poppins_400Regular" }}>{post?.body}</Text>

          {/* Writer */}
          <View
            style={{
              width: "90%",
              height: 80,
              borderRadius: 15,
              backgroundColor: "#f1f1f1",
              elevation: 5,
              alignSelf: "center",
              padding: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <Pen width={25} height={25} />
              <CustomText style={{ marginLeft: 10 }}>{author.name}</CustomText>
            </View>
            <CustomText style={{ marginLeft: 30 }}>
              @{author.username}
            </CustomText>
          </View>
        </View>
      </View>
    </ScrollView>
  ) : (
    <LoadingSpinner />
  );
};

export default PostDetails;
