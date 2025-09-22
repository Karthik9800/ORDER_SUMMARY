    import React, { useState } from 'react';
    import { View, Text, TextInput, StyleSheet } from 'react-native';

    const SudokuCell = ({ value, onChange, isEditable }) => (
      <TextInput
        style={styles.cell}
        value={value ? String(value) : ''}
        onChangeText={onChange}
        keyboardType="numeric"
        maxLength={1}
        editable={isEditable}
      />
    );

    export default function SudokuPuzzle() {
      const [board, setBoard] = useState(Array(9).fill(Array(9).fill(null)));

      const handleCellChange = (row, col, newValue) => {
        const newBoard = board.map((r, rIdx) =>
          r.map((c, cIdx) => (rIdx === row && cIdx === col ? parseInt(newValue) || null : c))
        );
        setBoard(newBoard);
      };

      return (
        <View style={styles.container}>
          {board.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, colIndex) => (
                <SudokuCell
                  key={`${rowIndex}-${colIndex}`}
                  value={cell}
                  onChange={(text) => handleCellChange(rowIndex, colIndex, text)}
                  isEditable={true} // Or based on puzzle logic
                />
              ))}
            </View>
          ))}
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        height:400,
        width:400,
        marginTop:10
      },
      row: {
        flexDirection: 'row',
      },
      cell: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        fontSize: 10,
      },
    });