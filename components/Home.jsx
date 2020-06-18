import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { addElement } from '../actions/index'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input_item: "",
      items: []
    }
  }

  componentDidMount() {
    this.getData()
    console.log('COMPONENT DID MOUNT')
  }

  async getData() {
    try {
      const jsonValue = await AsyncStorage.getItem('items')
      this.setState({
        items: JSON.parse(jsonValue)
      })
    } catch(e) {
      console.log(e)
    }
  }

  searchTextInputChanged(text) {
    this.state.input_item = text
  }

  submitText() {
    if(this.state.input_item != '') {
      this.props.addElement(this.state.input_item)
    }
    this.getData()
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
          keyExtractor={(item) => item + Math.floor(Math.random() * Math.floor(100))}
          renderItem={({item}) => (
            <Text style={styles.item}>{item}</Text>
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
  },
  item: {
    borderBottomWidth: 1,
    padding: 5,
    borderColor: 'grey'
  }
})

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addElement: (item) => dispatch(addElement(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



