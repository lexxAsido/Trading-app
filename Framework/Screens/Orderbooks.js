import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Orderbooks = () => {
  const [orderbook, setOrderbook] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth20");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const formattedBids = data.bids.map((bid, index) => ({
          key: index.toString(),
          price: parseFloat(bid[0]),
          amount: parseFloat(bid[1]),
        }));

        const formattedAsks = data.asks.map((ask, index) => ({
          key: (index + formattedBids.length).toString(),
          price: parseFloat(ask[0]),
          amount: parseFloat(ask[1]),
        }));

        setOrderbook([...formattedBids, ...formattedAsks]);
      } catch (error) {
        console.error("Error parsing WebSocket data:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      
      <FlatList
        data={orderbook}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={{color: "#FF5252", fontWeight: "bold",}}>{item.price}</Text>
            <Text style={{color: "#00C49A",}}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
    marginBottom:40
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  price: {
    color: "#FF5252",
    fontWeight: "bold",
  },
  amount: {
    color: "#00C49A",
  },
});

export default Orderbooks