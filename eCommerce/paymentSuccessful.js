import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const PaymentSuccessPage = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Payment Successful
      </Text>
      <View
        style={{
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Image
        style={{borderRadius:50, height:100, resizeMode:'contain'}}
        fadeDuration={300}
        source={require('../assets/paymentSuccessful.jpg')}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // Implement navigation logic to go back to the previous screen or perform another action
          console.log('Navigate back or perform another action');
        }}
        style={{
          backgroundColor: '#fe9666', // Blue color inspired by Amazon
          padding: 16,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Return to Home Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessPage;