import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../CartContext'; // Contexto do carrinho

// Lista de produtos
const products = [
  { id: 1, name: 'Big Mac', price: 32.50, image: 'https://example.com/bigmac.png', restaurant: 'McDonald’s - Kobrasol' },
  { id: 2, name: 'Coxinha do Jefferson', price: 4.50, image: 'https://example.com/coxinha.png', restaurant: 'Jeff’s Lanchonete' },
  { id: 3, name: 'Hot Dog do Paulão', price: 14.20, image: 'https://example.com/hotdog.png', restaurant: 'Paulão Hot Dog' },
];

const Tela1 = () => {
  const { addToCart, cart } = useContext(CartContext); // Usar o contexto
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productRestaurant}>{item.restaurant}</Text>
        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => addToCart(item)} // Adicionar ao carrinho
        >
          <Text style={styles.buyButtonText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>iFome</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Text style={styles.cartText}>{cart.length} itens</Text> {/* Exibe o número de itens no carrinho */}
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// Estilos usando o StyleSheet convencional
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E53935',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartText: {
    fontSize: 16,
    color: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productRestaurant: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#E53935',
    padding: 8,
    borderRadius: 4,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Tela1;