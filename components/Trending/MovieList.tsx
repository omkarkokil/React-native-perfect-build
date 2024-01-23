import React, { FC } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface movieProps {
  title: string;
  datas: any[];
}
let { width, height } = Dimensions.get("window");

const MovieList: FC<movieProps> = ({ title, datas }) => {
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-lg text-white">{title}</Text>
        <TouchableOpacity>
          <Text className="text-lg text-[#eab308]">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {datas?.map((item, id) => (
          <TouchableWithoutFeedback key={id}>
            <View
              style={{
                width: width * 0.33,
              }}
              className="space-y-1 mr-4"
            >
              <Image
                style={{
                  width: width * 0.33,
                  height: height * 0.22,
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w342/${item?.poster_path}.jpg`,
                }}
                className="rounded-3xl "
              />
              <Text numberOfLines={1} className="text-neutral-300 ml-1">
                {item?.original_title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

const MovieCard = ({ item }: { item: number }) => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <Image
          source={require("@/assets/images/movie.jpg")}
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

export default MovieList;
