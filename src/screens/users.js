//React import
import { useState, useEffect } from "react";

//React Native import
import { View, FlatList } from "react-native";

//Custom Components import
import User from "../components/User";
import LoadingSpinner from "../components/loadingSpinner";
import CustomText from "../components/CustomText";

//Recoil import
import { useRecoilState } from "recoil";
import { UsersState } from "../recoil/state";

const UsersPage = ({ navigation }) => {
  //Use State
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Recoil state
  const [_usersState, setUsersState] = useRecoilState(UsersState);

  //Use Effect
  /* Fetching data from the API and setting the state. Recoil state is used for other places */
  useEffect(() => {
    (async () => {
      try {
        
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setUsersState(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.log(error);
      }
    })();
  }, []);

  //Helper functions
  /**
   * The renderItem function takes in an object with a key of item, and returns a User component with
   * the name, username, navigation, and id props
   */
  const renderItem = ({ item }) => (
    <User
      name={item.name}
      userName={item.username}
      navigation={navigation}
      id={item.id}
    />
  );

  return !isLoading ? (
    <View
      style={{
        flex: 1,
      }}
    >
      <CustomText
        fontWeight="bold"
        fontSize={20}
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        Users
      </CustomText>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentInset={{ right: 20, top: 0, left: 20, bottom: 0 }}
      />
    </View>
  ) : (
    <LoadingSpinner />
  );
};

export default UsersPage;
