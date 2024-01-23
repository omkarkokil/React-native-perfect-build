import { getTopRatedMovies, getUpcomingMovies } from "@/api/MovieApi";
import MovieList from "@/components/Trending/MovieList";
import Trending from "@/components/Trending/Trending";
import { useQuery } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

export type formData = {
  email: string;
  password: string;
};

export default function TabOneScreen() {
  const upcoming = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcomingMovies,
  });
  const topRated = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  return (
    <View className="flex-1 bg-neutral-800 ">
      <SafeAreaView className="mb-3">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color={"white"} />
          <Text className="text-white text-bold text-3xl">
            <Text className="text-[#eab308]">M</Text>ovies
          </Text>
          <MagnifyingGlassIcon size="30" strokeWidth={2} color={"white"} />
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
      >
        <Trending />
        <MovieList title={"Upcoming"} datas={upcoming?.data?.results} />
        <MovieList title={"Top Rated"} datas={topRated?.data?.results} />
      </ScrollView>
    </View>
  );
}
