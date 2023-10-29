
/*import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-web';

/**export default function paymentPage(){
    return (
        <SafeAreaView>
            <PaymentMethodsList/>
        </SafeAreaView>    
    );
}
**/
/*const PaymentMethodsList = () => {
  const paymentMethods = [
    { id: '1', name: 'Net Banking', icon: 'phone' },
    { id: '2', name: 'GPay', icon: 'phone' },
    { id: '3', name: 'PhonePe', icon: 'phone' },
  ];

  const handlePaymentMethodPress = (method) => {
    // Implement logic to handle the selected payment method
    console.log(`Selected payment method: ${method.name}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePaymentMethodPress(item)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems:'center',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        <Icon name={item.icon} size={24} color="blue" />
        <Text style={{ marginLeft: 10, marginRight:220 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 10, marginTop:510}}>
      <Text 
      style={{
        fontSize:25,
        fontFamily:'Roboto',
        marginBottom:6
      }}>Payment Methods</Text>
      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => {
          // Implement logic for the "Pay Now" button press
          console.log('Pay Now button pressed');
        }}
        style={{
          backgroundColor: '#fe9666',
          padding: 16,
          alignItems:'center',
          marginBottom: 85,
          marginLeft:-12,
          marginRight:-12,
          borderRadius: 8, 
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodsList;
**/
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native';

const PaymentMethodsList = () => {
  const paymentMethods = [
    { id: '1', name: 'Net Banking', icon: 'phone' },
    { id: '2', name: 'GPay', icon: 'phone' },
    { id: '3', name: 'PhonePe', icon: 'phone' },
  ];

  const orderSummary = [
    { id: '1', item: 'Product 1', quantity: 2, price: '$20.00' },
    { id: '2', item: 'Product 2', quantity: 1, price: '$15.00' },
    { id: '3', item: 'Product 3', quantity: 3, price: '$30.00' },
  ];

  // Calculate the subtotal
  const subtotal = orderSummary.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)),
    0
  );

  // Calculate GST (Goods and Services Tax, in this case, 10%)
  const gst = subtotal * 0.1;

  // Calculate the total payment amount
  const totalAmount = subtotal + gst;

  const handlePaymentMethodPress = (method) => {
    // Implement logic to handle the selected payment method
    console.log(`Selected payment method: ${method.name}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePaymentMethodPress(item)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        <Icon name={item.icon} size={24} color="blue" />
        <Text style={{ marginLeft: 10, marginRight: 220 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderOrderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <Text>{item.item}</Text>
      <Text>{item.quantity} x {item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ marginBottom:-80, marginTop:80}}>
      <View style={{ flex: 10, marginBottom:220 }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Roboto',
            marginBottom: 10,
            marginLeft: 16,
            marginTop: 50,
            fontWeight:'bold'
          }}
        >
          Payment Methods
        </Text>
        <FlatList
          data={paymentMethods}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View
          style={{
            backgroundColor: '#f2f2f2',
            padding: 16,
            marginBottom:10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Summary</Text>
          <FlatList
            data={orderSummary}
            renderItem={renderOrderItem}
            keyExtractor={(item) => item.id}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              marginTop: 8,
              paddingTop: 8,
            }}
          >
            <Text>Subtotal:</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
              paddingTop: 8,
            }}
          >
            <Text>GST (10%):</Text>
            <Text>${gst.toFixed(2)}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              marginTop: 8,
              paddingTop: 8,
            }}
          >
            <Text>Total:</Text>
            <Text>${totalAmount.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={() => {
          // Implement logic for the "Pay Now" button press
          console.log('Pay Now button pressed');
        }}
        style={{
          backgroundColor: '#fe9666',
          padding: 16,
          alignItems: 'center',
          margin: 16,
          marginLeft: -12,
          marginRight: -12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Pay Now
        </Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default PaymentMethodsList;