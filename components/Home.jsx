import React from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input_item: "",
      items: ["léo", "Raph"]
    }
  }

  searchTextInputChanged(text) {
    this.state.input_item = text
  }

  submitText() {
    this.setState({
      items: [...[this.state.input_item], ...this.state.items]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder='Entrez du text'
          onChangeText={(text) => this.searchTextInputChanged(text)}
          onSubmitEditing={() => this.submitText()}
        />
        <Button
          onPress={() => this.submitText()}
          title="Ajouter"
          color="#841584"
        />

        <FlatList
          data={this.state.items}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <Text>{item}</Text>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
  textinput: {
    borderColor: 'grey',
    borderWidth: 2,
    paddingLeft: 5,
    borderRadius: 5,
    marginRight: 5
  }
})

export default Home


