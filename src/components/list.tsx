import React, { FC, ReactElement } from "react";
import { FlatList } from "react-native";
import { Item as TypeItem } from "../views/screen1";
import ListItem from "./listItem";
import styled from "styled-components";

const Wrapper = styled.View`
  width: 100%;
`;

const List: FC<{ data: TypeItem[]; onPress: any; scroll: any }> = ({
  data,
  onPress,
  scroll,
}): ReactElement => {
  const renderItem = ({ item }: { item: TypeItem }) => (
    <ListItem item={item} onPress={onPress} />
  );

  return (
    <Wrapper>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={scroll}
        onEndReachedThreshold={0}
      />
    </Wrapper>
  );
};

export default List;
