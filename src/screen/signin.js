import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from '../style/signinStyle';


function Signin({navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => navigation.navigate("Drawer");
  return (
    <View>
        <Image
         style={styles.logo}
         
        />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Username"
          />
        )}
        name="Username"
        defaultValue=""
        
      />
      {errors.Username && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
          />
        )}
        name="Password"
        defaultValue=""
        
      />
      {errors.Password && <Text>This is required.</Text>}

        <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>

    </View>
  );
}


export default Signin;