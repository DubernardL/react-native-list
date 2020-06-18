import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { addElement, deleteAll } from '../actions/index'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input_item: '',
      items_loaded: []
    }
  }

  async componentDidMount() {
    try {
      const jsonValue = await AsyncStorage.getItem('items')
      if(jsonValue != undefined) {
        this.setState({
          items_loaded: JSON.parse(jsonValue)
        })
      }
    } catch(e) {
      console.log(e)
    }
  }

  handleChange(text) {
    this.state.input_item = text
  }

  submitText() {
    if(this.state.input_item != '') {
      this.props.addItem(this.state.input_item)
    }
    this.componentDidMount()
  }

  deleteList() {
    if(this.state.items_loaded.length != 0) {
      this.props.delete()
    }
    this.componentDidMount()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.textinput}
            placeholder='Entrez du text'
            onChangeText={(text) => this.handleChange(text)}
            onSubmitEditing={() => this.submitText()}
          />
          <Button
            onPress={() => this.submitText()}
            style={styles.btn}
            title="Ajouter"
            color="#841584"
          />
        </View>

        <FlatList
          data={this.state.items_loaded}
          keyExtractor={(item) => item + Math.floor(Math.random() * Math.floor(10000))}
          renderItem={({item}) => (
            <Text style={styles.item}>{item}</Text>
          )}
        />

        <Button
          onPress={() => this.deleteList()}
          title="Tout supprimer"
          color="#841584"
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
  input_container: {
    flexDirection: 'row'
  },
  btn: {
    flex: 1
  },
  textinput: {
    flex: 1,
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
    items: state.items_loaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (item) => dispatch(addElement(item)),
    delete: () => dispatch(deleteAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



