import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { addToCart } from './cartSlice';

const products = [
  { id: 1, name: 'Apple', price: 100 },
  { id: 2, name: 'Mango', price: 80 },
  { id: 3, name: 'Orange', price: 60 }
];

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f5f5' }}>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Cart')}
        style={{ marginBottom: 20 }}
      >
        Go to Cart ({cartItems.length})
      </Button>

      {products.map(item => (
        <View
          key={item.id}
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            elevation: 3
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {item.name} - ₹{item.price}
          </Text>

          <Button
            mode="contained"
            onPress={() => dispatch(addToCart(item))}
            style={{ marginTop: 10 }}
          >
            Add to Cart
          </Button>
        </View>
      ))}

    </View>
  );
};

export default ProductScreen;
