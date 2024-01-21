import { formData } from "@/app/(tabs)";
import React, { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { KeyboardType, Text, TextInput, View } from "react-native";

interface InputProps {
  title: string;
  control: Control<formData>;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  name: "email" | "password";
}

const BasicInput: FC<InputProps> = ({
  title,
  control,
  keyboardType,
  secureTextEntry = false,
  name,
}) => {
  return (
    <View className="space-y-2 !mb-2 ">
      <Text>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="rounded-md px-2 mt-2  border-[.5px] border-gray-300"
            onChangeText={onChange}
            keyboardType={keyboardType}
            // autoCorrect={autoComplete}
            secureTextEntry={secureTextEntry}
            value={value}
          />
        )}
        name={name}
      />
    </View>
  );
};

export default BasicInput;
