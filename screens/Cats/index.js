import { verifyCode } from "../../modules/2fa/store/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CheckBox } from "react-native-elements";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Cats = ({
  route
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyCode());
  }, []);
  const {
    cats = "cats"
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>

          <View style={styles.column1}><CheckBox style={styles.XMzCdZuH} title="Checkbox Title"></CheckBox></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>

        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  XMzCdZuH: {
    width: 183,
    height: 69
  }
});
export default Cats;