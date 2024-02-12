import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import BookItem from '../components/BookItem';
import { booksData } from '../data/booksData';
import { useLibrary } from '../context/LibraryContext';

const numColumns = 2;

const ExploreScreen: React.FC = () => {
  const { addToLibrary } = useLibrary();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: any }) => (
    <BookItem
      book={item}
      onAddToLibrary={() => addToLibrary(item)}
      onRead={() => console.log('Read:', item.title)}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search books..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContent: {
    paddingBottom: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    //alignItems:'center'
  },
  searchBar: {
    marginBottom: 16,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default ExploreScreen;

