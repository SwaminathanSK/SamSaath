/**import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ProductDisplayPage = () => {
  // Dummy product data, replace with your actual data
  const products = [
    {
      id: '1',
      name: 'Product 1',
      image: require('../assets/vegetables.png'),
      price: '$20.00',
      inventory: 'In Stock',
    },
    {
      id: '2',
      name: 'Product 2',
      image: require('../assets/vegetables.png'),
      price: '$25.00',
      inventory: 'Out of Stock',
    },
    {
      id: '3',
      name: 'Product 3',
      image: require('../assets/vegetables.png'),
      price: '$30.00',
      inventory: 'In Stock',
    },
    // Add more products as needed
  ];

  return (
    <ScrollView>
      <View style={{ padding: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          Company Name
        </Text>
      </View>

      {products.map((product) => (
        <View
          key={product.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}
        >
          <Image
            source={product.image}
            style={{ width: 80, height: 80, marginRight: 16 }}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {product.name}
            </Text>
            <Text>{product.price}</Text>
            <Text>{product.inventory}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
export default ProductDisplayPage;
**/



import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProductDisplayPage = () => {
  // Dummy product data, replace with your actual data
  const products = [
    {
      id: '1',
      name: 'Product 1',
      image: require('../assets/vegetables.png'),
      price: '$20.00',
      inventory: 'In Stock',
    },
    {
      id: '2',
      name: 'Product 2',
      image: require('../assets/vegetables.png'),
      price: '$25.00',
      inventory: 'Out of Stock',
    },
    {
      id: '3',
      name: 'Product 3',
      image: require('../assets/vegetables.png'),
      price: '$30.00',
      inventory: 'In Stock',
    },
    {
        id: '4',
        name: 'Product 3',
        image: require('../assets/vegetables.png'),
        price: '$30.00',
        inventory: 'In Stock',
    },
    {
        id: '5',
        name: 'Product 3',
        image: require('../assets/vegetables.png'),
        price: '$30.00',
        inventory: 'In Stock',
    },
    {
        id: '6',
        name: 'Product 3',
        image: require('../assets/vegetables.png'),
        price: '$30.00',
        inventory: 'In Stock',
    },
    {
        id: '7',
        name: 'Product 3',
        image: require('../assets/vegetables.png'),
        price: '$30.00',
        inventory: 'In Stock',
    },
    // Add more products as needed
];

  const handleProductClick = (product) => {
    // Implement logic to handle the click event for the product.
    console.log(`Clicked on product: ${product.name}`);
    // You can navigate to a product details page, add the product to the cart, etc.
  };

  return (
    <ScrollView style={{width:'100%'}}>
      <View style={{ padding: 16, backgroundColor: 'white', marginTop: 100}}>
        <Image 
         source={require('../assets/vegetables.png')}
         style={{resizeMode:'contain', height:180, alignSelf:'center',}}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, alignSelf:'center' }}>
          Kharagpur Kiranas
        </Text>
      </View>

      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() => handleProductClick(product)}
          style={{marginLeft:100}}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              marginLeft:-120
            }}
          >
            <Image
              source={product.image}
              style={{width: 80, height: 80, flex:2, resizeMode:'contain', }}
            />
            <View style={{flex:5, flexDirection:'row', marginLeft:20}}>
                <View style={{marginLeft:0, flex:1}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {product.name}
                </Text>
                <Text>{product.inventory}</Text>
                </View>
                <View style={{marginLeft:0, alignItems:'flex-end', flex:1}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.price}</Text>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductDisplayPage;