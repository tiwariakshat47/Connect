import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator, Platform } from 'react-native';
import localIp from '@/components/secrets';  

interface Class {
  code: string;
  name: string;
}

export default function WebScrapeScreen() {
  const [htmlContent, setHtmlContent] = useState('');
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);

  const getFetchUrl = () => {
    if (Platform.OS === 'android') {
      // Android emulator
      return 'http://localhost:5000/scrape?url=https://catalog.ucsc.edu/en/current/general-catalog/courses/';
    } else if (Platform.OS === 'ios') {
      // iOS emulator or physical device
      const locIp = localIp;
      return `http://${locIp}:5000/scrape?url=https://catalog.ucsc.edu/en/current/general-catalog/courses/`;
    } else {
      // Default fallback
      return 'http://localhost:5000/scrape?url=https://catalog.ucsc.edu/en/current/general-catalog/courses/';
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(getFetchUrl());
      const result = await response.json();
      const content = result.htmlContent;
      setHtmlContent(content); 
      setClasses(extractClasses(content)); 
    } catch (error) {
      console.info(error)
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const extractClasses = (htmlContent: string): Class[] => {
    const regex = /<li>([A-Z]+) - (.+?)<\/li>/g; 
    let classes: Class[] = [];
    let match;

    while ((match = regex.exec(htmlContent)) !== null) {
      const classCode = match[1]; 
      const className = match[2];

      if (classCode && className) {
        classes.push({ code: classCode, name: className });
      }
    }

    return classes;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>Web Scrape Test</Text>
      <View style={styles.separator} />
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <ScrollView>
          {classes.map((classItem, index) => (
            <Text key={index} style={styles.text}>{classItem.code} - {classItem.name}</Text>
          ))}
        </ScrollView>
      )}
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#eee',
  },
  text: {
    color: 'white',
  },
});
