import React, { useState } from 'react';
import { Alert, Modal, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

var array = ["", "", "", "", "", "", "", "", ""];
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [getScore1, setScore1] = useState(0);
  const [getScore2, setScore2] = useState(0);
  const [getResult, setResult] = useState("");
  const [getTurn, setTurn] = useState(1);

  const checkTurn = (num) => {
    if (array[num] == "") {
      if (getTurn % 2 == 1) {
        array[num] = 'X';
        setTurn(getTurn + 1)
      } else {
        array[num] = 'O';
        setTurn(getTurn + 1)
      }
    }
  }

  const checkSequence = () => {

    const sequence = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],];

    for (var i = 0; i < sequence.length; i++) {
      const [x, y, z] = sequence[i];
      if (array[x] != '' && array[y] != '' && array[z] != '') {
        if (array[x] == array[y] && array[y] == array[z]) {
          checkWinner();
          break;
        } else if (getTurn == 9) {
          setResult("Draw");
          setTurn(1);
          setModalVisible(true);
        }
      }
    }
  }

  const checkWinner = () => {
    if (getTurn % 2 == 1) {
      setScore1(getScore1 + 1);
      setResult("Player 1 Wins");
      setTurn(1);
      setModalVisible(true);
    } else if (getTurn % 2 == 0) {
      setScore2(getScore2 + 1);
      setResult("Player 2 Wins");
      setTurn(1);
      setModalVisible(true);
    }
  }

  const resetArray = () => {
    array = ["", "", "", "", "", "", "", "", ""];
  }

  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 45, marginVertical: 5, color: '#ff9ecd', fontWeight: 'bold' }}>Tic-Tac-Toe</Text>
      <Text style={{ transform: [{ rotate: '180deg' }], fontSize: 35, color: '#ff9ecd', fontWeight: 'bold' }}>Player 2: {getScore2}</Text>

      {/* Row 1 */}
      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(0);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[0]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(1);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[1]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(2);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[2]}</Text>
        </Pressable>
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(3);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[3]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(4);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[4]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(5);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[5]}</Text>
        </Pressable>
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(6);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[6]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(7);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[7]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(8);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ff9ecd' }}>{array[8]}</Text>
        </Pressable>
      </View>

      <Text style={{ fontSize: 35, color: '#ff9ecd', fontWeight: 'bold' }}>Player 1: {getScore1}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{getResult}</Text>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => {
                resetArray();
                setResult("");
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Play Again</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => {
                resetArray();
                setResult();
                setScore1(0);
                setScore2(0);
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Reset Game</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#78c4d4'
  },
  row: {
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-evenly',
    marginVertical: 2
  },
  text: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#ffd880',
    width: 90,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: "65%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25
  }
});

export default App;