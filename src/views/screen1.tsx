import React, { FC, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import List from "../components/list";
import Layout from "../components/layout";
import Spinner from "../components/spinner";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export type Item = {
  id: string;
  title: string;
  urlToImage: string;
  content: string;
};

const Home: FC<{ navigation: Props }> = ({ navigation }): ReactElement => {
  const [data, setData] = useState<Item[]>([]);
  const [allData, setAllData] = useState<Item[]>([]);
  const [scroll, setScroll] = useState<{ start: number; end: number }>({
    start: 0,
    end: 5,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const getData = () => {
    setLoading(true);

    axios
      .get(
        "https://newsapi.org/v2/everything?" +
          "q=Apple&" +
          "from=2021-10-07&" +
          "sortBy=popularity&" +
          "apiKey=24295e5ca8c1459cb58ec029b1c87d66"
      )
      .then((response: any) => {
        setAllData(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData(allData.slice(scroll.start, scroll.end));
  }, [allData]);

  useEffect(() => {
    setData((prevState) => {
      return [...prevState, ...allData.slice(scroll.start, scroll.end)];
    });
  }, [scroll]);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, [data]);

  const loadingMore = () => {
    setLoading(true);
    setScroll((prevState) => {
      let start = prevState.start + 5;
      let end = prevState.end + 5;
      return { start, end };
    });
  };

  return (
    <Layout>
      <List
        data={data}
        onPress={(e: Item) => navigation.navigate("Details", { item: e })}
        scroll={scroll.end < allData.length && loadingMore}
      />
      {loading && <Spinner />}
    </Layout>
  );
};

export default Home;
