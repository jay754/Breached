import React, { useState, useEffect } from 'react';

import { 
  View, 
  TextInput, 
  Button, 
  Text, 
  StyleSheet,
  ScrollView
} from 'react-native';

const LatestBreach = () => {
  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://haveibeenpwned.com/api/v3/latestbreach', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <View style={styles.container}>
          <View style={styles.mini_container}>
            <Text style={styles.header}> 
              Latest Breach Info
            </Text>

            <Text style={styles.info}> Name: {data.Name}</Text>
            <Text style={styles.info}> Domain Name: {data.Domain}</Text>
            <Text style={styles.info}> Breach date: {data.BreachDate}</Text>
            <Text style={styles.info}> Emails leaked: {data.PwnCount}</Text>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
  mini_container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    backgroundColor: 'white',
    padding: 22
  },
  header: {
    fontSize: 40
  },
  info: {
    marginTop: 15
  }
});

export default LatestBreach;