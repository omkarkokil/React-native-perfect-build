import { getMovie } from "@/api/MovieApi";
import imageforlootie from "@/assets/images/loader.json";
import Cast from "@/components/Movie/Cast";
import { useQuery } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const navigate = useNavigation();
  const item = useLocalSearchParams();

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movieDetails", item?.id],
    queryFn: () => getMovie(item.id),
  });

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {isLoading ? (
        <View className="text-white flex flex-1 items-center justify-center h-screen">
          <LottieView
            source={imageforlootie}
            autoPlay
            loop
            style={{ flex: 1 }}
          />
          {/* <Image source={animatedGif} /> */}
        </View>
      ) : (
        <>
          <View className="w-full">
            <SafeAreaView
              className={
                "absolute z-20 w-full flex-row justify-between items-center px-4 "
              }
            >
              <TouchableOpacity
                // style={styles.background}
                className="rounded-xl p-1"
                onPress={() => navigate.goBack()}
              >
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <HeartIcon
                  size="35"
                  // color={isFavourite ? theme.background : "white"}
                />
              </TouchableOpacity>
            </SafeAreaView>

            <View>
              {isLoading ? (
                <View
                  className="bg-gray-100/80"
                  style={{ width, height: height * 0.55 }}
                ></View>
              ) : (
                <Image
                  // source={require("@/assets/images/movie.jpg")}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w342/${movie?.poster_path}.jpg`,
                  }}
                  style={{ width, height: height * 0.55 }}
                />
              )}
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(23, 23, 23, 0.8)",
                  "rgba(23, 23, 23, 1)",
                ]}
                style={{ width, height: height * 0.4 }}
                className="absolute bottom-0"
              />
            </View>
          </View>

          {/* movie details */}

          <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
            {/* title */}
            <Text className="text-white text-center text-3xl font-bold tracking-widest">
              {movie?.title}
            </Text>

            {/* status, release year, runtime */}
            {movie?.id ? (
              <Text className="text-neutral-400 font-semibold text-base text-center">
                {movie?.status} • {movie?.release_date?.split("-")[0] || "N/A"}{" "}
                • {movie?.runtime} min
              </Text>
            ) : null}

            {/* genres  */}
            <View className="flex-row justify-center mx-4 space-x-2">
              {movie?.genres?.map((genre: any, index: number) => {
                let showDot = index + 1 != movie.genres.length;
                return (
                  <Text
                    key={index}
                    className="text-neutral-400 font-semibold text-base text-center"
                  >
                    {genre?.name} {showDot ? "•" : null}
                  </Text>
                );
              })}
            </View>

            {/* description */}
            <Text className="text-neutral-400 mx-4 tracking-wide">
              {movie?.overview}
            </Text>
          </View>
          <Cast id={item?.id} />
        </>
      )}
    </ScrollView>
  );
}
