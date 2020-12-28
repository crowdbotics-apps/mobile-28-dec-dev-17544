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

  state = { TextInput_9: "" }

  render = () => (
    <View>
      <View>
        <View>
          <Image
            source={{
              uri:
                "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/Hydrangeas_V5njDpn.jpg"
            }}
          />
        </View>
        <View>
          <TextInput
            placeholder="Number Input Placeholder"
            keyboardType="numeric"
            value={this.state.TextInput_9}
            onChangeText={nextValue =>
              this.setState({ TextInput_9: nextValue })
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: {},
  View_3: {},
  Image_13: {},
  View_4: {},
  TextInput_9: {}
})
