import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

const FormInput = ({ labelName, ...rest }) => {
  return (
    <TextInput
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
};
export default FormInput;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15,
  },
});
