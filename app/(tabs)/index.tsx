import BasicInput from "@/components/InputFields/BasicInput";
import { View } from "@/components/Themed";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity } from "react-native";

export type formData = {
  email: string;
  password: string;
};

export default function TabOneScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: (cred: formData) => {
      const data = axios.post(
        "https://aegis-qa.argantechnology.com/api/route/employee/login",
        cred
      );

      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      Alert.alert("Login success");
    },
    onError: () => {
      Alert.alert("Something went r");
      console.log("error");
    },
  });

  const onSubmit: SubmitHandler<formData> = async (data) => {
    loginMutation.mutate(data);
  };

  return (
    <View className="flex flex-col h-screen justify-center items-center">
      <View className="space-y-2 w-[70%]">
        <Text className="text-2xl my-2">Login Page</Text>
        <BasicInput
          title="Enter your email"
          keyboardType={"email-address"}
          name={"email"}
          control={control}
        />
        <BasicInput
          title="Enter your password"
          keyboardType={"default"}
          secureTextEntry={true}
          name={"password"}
          control={control}
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-sky-400 w-[80px]  px-4 py-2 rounded-lg"
        >
          <Text className="text-white">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
