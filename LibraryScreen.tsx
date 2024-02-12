import React from 'react';
import { View, FlatList, Text } from 'react-native';
import BookItem from '../components/BookItem';
import { useLibrary } from '../context/LibraryContext';
import { booksData } from '../data/booksData'; // Assuming you have this

const LibraryScreen: React.FC = () => {
    const { library, removeFromLibrary } = useLibrary();
  
    return (
      <View>
        {library.length > 0 ? (
          <FlatList
            data={library}
            renderItem={({ item }) => (
              <BookItem
                book={item}
                onRead={() => { /* Implement read functionality */ }}
                onRemoveFromLibrary={() => removeFromLibrary(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>No books in your library yet.</Text>
        )}
      </View>
    );
  };

  export default LibraryScreen;




