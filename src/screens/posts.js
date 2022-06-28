//React import
import { useState, useEffect } from "react";

//React Native import
import { View, FlatList } from "react-native";

//Custom Components import
import CustomText from "../components/CustomText";
import LoadingSpinner from "../components/loadingSpinner";
import Post from "../components/Post";

//Recoil import
import { useRecoilState } from "recoil";
import { postState } from "../recoil/state";

import axios from "axios";

const PostsPage = ({ navigation }) => {
  //Use State
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Recoil state
  const [_postsState, setPostsState] = useRecoilState(postState);

  //Use Effect
  /* Fetching data from the API and setting the state. Recoil state is used for other places */
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = response.data;
        //Limiting the number of posts to 20
        const customData = data.slice(0, 20);
        setPosts(customData);
        setPostsState(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, []);

  //Helper functions
  const renderItem = ({ item }) => (
    <Post
      id={item.id}
      navigation={navigation}
      title={item.title}
      writerId={item.userId}
    />
  );

  return !isLoading ? (
    <View>
      <CustomText
        fontWeight="bold"
        fontSize={20}
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        Posts
      </CustomText>

      <FlatList
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentInset={{ right: 20, top: 0, left: 20, bottom: 0 }}
      />
    </View>
  ) : (
    <LoadingSpinner />
  );
};

export default PostsPage;
