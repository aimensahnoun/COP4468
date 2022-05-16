//React import
import { useState, useEffect } from "react";

//React Native import
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

//Custom Components import
import User from "../components/User";
import LoadingSpinner from "../components/loadingSpinner";
import CustomText from "../components/CustomText";

//Recoil import
import { useRecoilState } from "recoil";
import {UsersState} from "../recoil/state"

const UsersPage = ({ navigation }) => {
  //Use State
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Recoil state
  const [_usersState, setUsersState] = useRecoilState(UsersState);

  //Use Effect
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default UsersPage;
