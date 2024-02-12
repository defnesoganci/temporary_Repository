import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Book } from '../models/Book';

interface BookItemProps {
  book: Book;
  onAddToLibrary?: () => void;
  onRead: () => void;
  onRemoveFromLibrary?: () => void;
  inLibrary?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({ book, onAddToLibrary, onRead, onRemoveFromLibrary, inLibrary }) => {
  const [showButtons, setShowButtons] = useState(false);

  // Adjusted to toggle visibility of buttons on pressing the book's image or details
  const handleToggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleButtons} style={styles.touchableArea}>
        <Image source={{ uri: book.coverImageUrl }} style={styles.image} />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </TouchableOpacity>
      {showButtons && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onRead} style={styles.button}>
            <Text>Read</Text>
          </TouchableOpacity>
          {!inLibrary && (
            <TouchableOpacity onPress={onAddToLibrary} style={styles.button}>
              <Text>Add to Library</Text>
            </TouchableOpacity>
          )}
          {inLibrary && (
            <TouchableOpacity onPress={onRemoveFromLibrary} style={styles.button}>
              <Text>Remove from Library</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // Add more styles for the container if needed
  },
  touchableArea: {
    // Styles to make the touchable area visually integrated
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  // Add or adjust styles for the touchable area, buttons, etc., as needed
});

export default BookItem;

