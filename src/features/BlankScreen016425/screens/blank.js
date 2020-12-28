import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_5: "",
    DateTimePicker_8: new Date("02/04/0008"),
    CheckBox_9: true
  }

  render = () => (
    <View>
      <View style={styles.View_2}>
        <View />
        <View />
      </View>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Icon name="star" />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_8}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_8: selectedDate })
        }
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_9}
        onPress={nextChecked => this.setState({ CheckBox_9: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  View_4: {},
  TextInput_5: {},
  Icon_6: {},
  Button_7: {},
  DateTimePicker_8: {},
  CheckBox_9: {}
})
