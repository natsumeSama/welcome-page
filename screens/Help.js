import React from 'react';
import { StyleSheet, Text,ScrollView, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function WelcomeScreen() {
  


  return (
    <View className="flex-1 bg-white ">
     <StatusBar style='dark'/>
     <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome to the Help Center!</Text>
        <Text style={{ marginTop: 10 }}>
          We've compiled a collection of resources to help you get the most out of [Algeria Discover].
        </Text>
      
        <View style={{ marginTop: 20 }}>
          <Text>Search:</Text>
          <Text>Use the search bar at the top to find answers to your questions quickly.</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>FAQs:</Text>
          <Text>Check out our Frequently Asked Questions for solutions to common issues.</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Get in Touch:</Text>
          <Text>Still have questions? Don't hesitate to contact our support team through [link to contact information or form].</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>We appreciate your feedback!</Text>
          <Text>Let us know if you can't find what you're looking for, or if you have any suggestions on how we can improve the Help Center.</Text>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}