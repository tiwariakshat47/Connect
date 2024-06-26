import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';

interface Class {
  code: string;
  name: string;
}

export default function WebScrapeScreen() {
  const [htmlContent, setHtmlContent] = useState('');
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true); 
    try {
      const response = await fetch('http://localhost:5000/scrape?url=https://catalog.ucsc.edu/en/current/general-catalog/courses/');
      const result = await response.json();
      const content = result.htmlContent;
      setHtmlContent(content); 
      setClasses(extractClasses(content)); 
    } catch (error) {
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
      <Text style={styles.title}>Web Scrape Test</Text>
      <View style={styles.separator} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          {classes.map((classItem, index) => (
            <Text key={index}>{classItem.code} - {classItem.name}</Text>
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
});