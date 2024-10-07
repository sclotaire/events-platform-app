// HomePage.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const HomePage = () => {
  // Sample data for the cards
  const events = [
    {
      id: '1',
      name: 'Event 1',
      date: 'Jan 10 - Jan 12, 2023',
    //   image: require('./assets/event1.png'), // Ensure you have the images in the assets folder
    },
    {
      id: '2',
      name: 'Event 2',
      date: 'Feb 15 - Feb 17, 2023',
    //   image: require('./assets/event2.png'),
    },
    {
      id: '3',
      name: 'Event 3',
      date: 'Mar 20 - Mar 22, 2023',
    //   image: require('./assets/event3.png'),
    },
    // Add more events as needed
  ];

  return (
    <View style={styles.container}>
      <Image 
        // source={require('./assets/logo.png')} // Add your logo in the assets folder
        style={styles.logo} 
      />
      
      <Text style={styles.title}>Upcoming Events</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {events.map(event => (
          <TouchableOpacity key={event.id} style={styles.card}>
            <Image source={event.image} style={styles.image} />
            <Text style={styles.cardName}>{event.name}</Text>
            <Text style={styles.cardId}>Event ID: {event.id}</Text>
            <Text style={styles.cardDate}>{event.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F75FF',
    padding: 16,
  },
  logo: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24, // Smaller title size
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#6439ff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  image: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cardId: {
    fontSize: 16,
    color: '#ffffff',
  },
  cardDate: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default HomePage;
