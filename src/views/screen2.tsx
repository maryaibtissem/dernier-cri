import React from "react";

import Layout from "../components/layout";
import ListItem from "../components/listItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Screen2 = ({ route }: Props) => {
  const { item } = route.params;
  return (
    <Layout>
      <ListItem item={item} onPress={null} details={true} />
    </Layout>
  );
};

export default Screen2;
