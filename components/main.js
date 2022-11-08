//Import dependencies
import React, { Component} from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import Note from "./note";




  



//Article component
export default class Main extends Component {
  state = {
    noteArray: [],
    noteText: "",
    noteTitle: ""
  };


  

  agregar = e => {
    if (this.state.noteText) {
      let d = new Date();
      const newNote = {
        date:  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
        title: this.state.noteTitle,
        note: this.state.noteText
      };
      this.setState({
        noteArray: [...this.state.noteArray, newNote],
        noteText: "",
        noteTitle: ""
      });
    }
  };



  render() {
    let notes = this.state.noteArray.map((val, id) => {
      return (
        <Note key={id} val={val} deleteMethod={() => this.deleteNote(key)} />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Diario</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={noteTitle => this.setState({ noteTitle })}
            value={this.state.noteTitle}
            placeholder="Título"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Descripción"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        

        <TouchableOpacity style={styles.addButton} onPress={this.agregar}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      
    );
  }
}

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#c0e91e",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#1c876b",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#c0e91e",
    width: 90,
    height: 90,
    borderRadius: 59,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});