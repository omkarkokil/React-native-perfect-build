import { getTrendingMovies } from "@/api/MovieApi";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

let { width, height } = Dimensions.get("window");

const Trending = () => {
  const trending = useQuery({
    queryKey: ["trend"],
    queryFn: getTrendingMovies,
  });

  return (
    <View className="mb-8">
      <Text className="text-white text-lg mb-5">Trending</Text>
      <Carousel
        data={trending?.data?.results}
        renderItem={({ item }: { item: any }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        vertical={false}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

const MovieCard = ({ item }: { item: any }) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => router.push({ pathname: "/movie/movie", params: item })}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}.jpg`,
          }}
          style={{
            width: width * 0.6,
            height: height * 0.4,
          }}
          className="rounded-3xl"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Trending;
