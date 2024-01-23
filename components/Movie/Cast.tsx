import { getMovieCast } from "@/api/MovieApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { fallbackPersonImage, image185, image342 } from "../api/moviedb";
var { width, height } = Dimensions.get("window");

export default function Cast({ id }: { id: string | string[] | undefined }) {
  const { data: cast } = useQuery({
    queryKey: ["cast"],
    queryFn: () => getMovieCast(id),
  });

  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast?.cast?.map((person: any, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                // onPress={() => navigation.navigate("Person", person)}
                className="mr-4 items-center"
              >
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    // source={require('../assets/images/castImage1.png')}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w185/${person?.profile_path}.jpg`,
                    }}
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {person?.character.length > 10
                    ? person.character.slice(0, 10) + "..."
                    : person?.character}
                </Text>
                <Text className="text-neutral-400 text-xs">
                  {person?.original_name.length > 10
                    ? person.original_name.slice(0, 10) + "..."
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
