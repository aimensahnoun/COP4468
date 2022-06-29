//React import
import { useEffect, useState } from "react";

//React Native import
import { View, TouchableOpacity, Text, FlatList } from "react-native";

//Custom Component import
import CustomText from "../components/CustomText";
import LoadingSpinner from "../components/loadingSpinner";

//Recoil import
import { useRecoilValue } from "recoil";
import { UsersState } from "../recoil/state";

//Assets import
import LeftArrow from "../assets/icons/arrow-left.svg";
import Pen from "../assets/icons/pen.svg";

import axios from "axios";

const PostDetails = ({ navigation, route }) => {
  const { id } = route.params;

  //Use state
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  //Recoil state
  const users = useRecoilValue(UsersState);

  //useEffect
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        const data = response.data;

        setPost(data);

        const commentsResponse = await axios(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );

        const commentsData = commentsResponse.data;

        setComments(commentsData);

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
    <View
      style={{
        padding: 20,
        paddingBottom: 200,
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
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.pop()}>
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

        <View>
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
          <CustomText
            fontWeight="bold"
            fontSize={20}
            style={{
              marginVertical: 10,
            }}
          >
            Comments:
          </CustomText>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 180,
              marginBottom: 100,
            }}
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  padding: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              >
                <CustomText fontSize={14} fontWeight={"bold"}>{item.name}</CustomText>
                <CustomText fontSize={14}>{item.email}</CustomText>
                <Text>{item.body}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  ) : (
    <LoadingSpinner />
  );
};

export default PostDetails;
