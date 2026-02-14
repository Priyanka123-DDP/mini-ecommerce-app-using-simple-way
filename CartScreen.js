import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { removeFromCart, addToCart, clearCart } from './cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Total calculation
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={{ padding: 20, backgroundColor: '#f5f5f5', flex: 1 }}>

      {cartItems.map(item => (
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
            {item.name} - ₹{item.price} x {item.quantity}
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Button
              mode="contained"
              onPress={() => dispatch(removeFromCart(item.id))}
              style={{ marginRight: 10 }}
            >
              -
            </Button>

            <Button
              mode="contained"
              onPress={() => dispatch(addToCart(item))}
            >
              +
            </Button>
          </View>
        </View>
      ))}

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
          textAlign: 'center'
        }}
      >
        Total: ₹ {total}
      </Text>

      <Button
        mode="contained"
        onPress={() => dispatch(clearCart())}
        style={{ marginTop: 15 }}
      >
        Clear Cart
      </Button>

    </View>
  );
};

export default CartScreen;
