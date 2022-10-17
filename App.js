import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import searchbar from "./components/SearchBar";

//Search Screen blue print
//Have a search bar to search for a city (with FSQ Auto complete API)
//Add a filter Feature to filter by city, state, or country
//Add a checkbox or a swipe motion when adding a city
//Add a filer feature to filter what kind of place user wanted to go
//Add a filter feature to filter by price
//Add a filter feature to filter by rating
//Add a filter feature to filter by distance
//Add a filter feature to filter by open or closed
//Add a filter feature to filter by open now
//Add a filter feature to filter by open later
//Add a filter feature to filter by open tomorrow

//Foursquare Places API
//https://developer.foursquare.com/docs/api/venues/search
//https://developer.foursquare.com/docs/places-api/getting-started/
//https://developer.foursquare.com/docs/places-api/autocomplete/
//https://developer.foursquare.com/docs/places-api/autocomplete/#request
//https://developer.foursquare.com/docs/places-api/autocomplete/#response
//https://developer.foursquare.com/docs/places-api/autocomplete/#example
//FSQ should be able to give us the following information
//Name of the place
//Address of the place
//City of the place
//Open now
//Open later

//Swipe Screen blue print
//Have a list of cards of place, address, photo, description, rating, price, distance, open or closed, open now, open later, open tomorrow
//Each button or swipe should have a different action
//Left is a nope
//Right is a like  - add to the list of places to go
//Up is a save* (Maybe for future reference)
//Down is a maybe* (Maybe for future reference)
//Click on the card should bring up a modal with more information
//Click on the card should bring up a modal with a map
//Click on the card should bring up a modal with a photo
//Click on the card should bring up a modal with a description
//Click on the card should bring up a modal with a rating
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
