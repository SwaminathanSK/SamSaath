import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const DeliveryPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [isDeliveryModalVisible, setDeliveryModalVisible] = useState(false);
  const [isPickupModalVisible, setPickupModalVisible] = useState(false);

  const options = [
    { id: '1', name: 'Delivery' },
    { id: '2', name: 'Pickup' },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDescriptionContainer}>
        <Text style={styles.pageTitle}>Product Description</Text>
        <Text style={styles.productDescription}>
          This is a product description. Provide information about the product here. It can be a detailed
          description, specifications, or any other relevant information.
        </Text>
      </View>

      {/* Option Selection */}
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleOptionSelect(item.name)}
            style={selectedOption === item.name ? styles.selectedOption : styles.option}
          >
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Delivery Modal */}
      <Modal
        visible={isDeliveryModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delivery Address</Text>
            <TextInput
              value={deliveryAddress}
              onChangeText={(text) => setDeliveryAddress(text)}
              placeholder="Enter delivery address"
              style={styles.modalInput}
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setDeliveryModalVisible(false);
                // Save the delivery address and perform any necessary actions
              }}
            >
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Pickup Modal */}
      <Modal
        visible={isPickupModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pickup Time</Text>
            <TextInput
              value={pickupLocation}
              onChangeText={(text) => setPickupLocation(text)}
              placeholder="Enter pickup time"
              style={styles.modalInput}
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setPickupModalVisible(false);
                // Save the pickup location and perform any necessary actions
              }}
            >
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {selectedOption === 'Delivery' && (
        <TouchableOpacity
          onPress={() => setDeliveryModalVisible(true)}
          style={styles.optionButton}
        >
          <Text style={styles.optionButtonText}>Provide Delivery Details</Text>
        </TouchableOpacity>
      )}

      {selectedOption === 'Pickup' && (
        <TouchableOpacity
          onPress={() => setPickupModalVisible(true)}
          style={styles.optionButton}
        >
          <Text style={styles.optionButtonText}>Provide Pickup Details</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
    marginTop:150
  },
  productDescriptionContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius:8
  },
  selectedOption: {
    backgroundColor: '#fe9666',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius:8
  },
  optionText: {
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    width: 300,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#fe9666',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#fe9666',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:100
  },
});

export default DeliveryPage;
