import React, { FC, ReactElement } from "react";
import {} from "react-native";

import styled from "styled-components";

import { Item as TypeItem } from "../views/screen1";

const Item = styled.TouchableOpacity`
  padding: 20px;
  width: 90%;
  margin: 4%;
  border-bottom-width: 1px;
  border-color: grey;
`;

const Title = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const Content = styled.Text`
  color: white;
  font-size: 12px;
  padding-top: 20px;
`;

const Image = styled.Image`
  width: 305px;
  height: 150px;
  margin-bottom: 5px;
`;

const ListItem: FC<{ item: TypeItem; onPress: any; details?: boolean }> = ({
  item,
  onPress,
  details = false,
}): ReactElement => {
  const { title, urlToImage, content } = item;
  return (
    <Item onPress={() => onPress && onPress(item)}>
      <Image source={{ uri: urlToImage }} />
      <Title>{title}</Title>
      {details && <Content>{content}</Content>}
    </Item>
  );
};

export default ListItem;
