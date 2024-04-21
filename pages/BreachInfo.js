import React, { useState } from 'react';
import { 
  View, 
  TextInput,
  Button, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  ScrollView 
} from 'react-native';

const BreachInfo = () => {
    const [breachName, setBreachName] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!breachName.trim()) {
            alert('Please enter a valid breach name.');
            return;
        }
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const url = `https://haveibeenpwned.com/api/v3/breach/${encodeURIComponent(breachName.trim())}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'hibp-api-key': ''
                }
            });
            if (!response.ok) {
                throw new Error('Breach not found or error fetching details');
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
          <View style={styles.mini_container}> 
            <Text style={styles.header}> Breach Info </Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Breach Name (e.g., Adobe)"
                value={breachName}
                onChangeText={setBreachName}
                autoCapitalize="none"
            />
            <Button title="Search" onPress={handleSearch} />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.error}>{error}</Text>}
            {data && <View style={styles.dataContainer}>
                <Text style={styles.info}> Name: {data.Name}</Text>
                <Text style={styles.info}> Domain Name: {data.Domain}</Text>
                <Text style={styles.info}> Breach date: {data.BreachDate}</Text>
                <Text style={styles.info}> Emails leaked: {data.PwnCount}</Text>
            </View>}
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    padding: 30
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
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '100%',
  },
  header: {
    fontSize: 30,
    marginTop: 20,
  },
  info: {
    marginTop: 10
  },
  data: {
    fontSize: 20,
    padding: 20
  }
});

export default BreachInfo;