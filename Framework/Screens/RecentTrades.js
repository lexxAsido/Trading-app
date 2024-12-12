import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

const RecentTrades = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
    ws.onmessage = (event) => {
      const tradeData = JSON.parse(event.data);
      const formattedTrade = {
        id: tradeData.t,
        price: tradeData.p,
        quantity: tradeData.q,
        time: new Date(tradeData.T).toLocaleTimeString(),
        isBuyerMaker: tradeData.m,
      };
      setTrades((prev) => [formattedTrade, ...prev.slice(0, 19)]); // Keep only the latest 20 trades
    };

    return () => ws.close();
  }, []);

  const renderItem = ({ item }) => (
    <View style={[styles.tradeRow, { backgroundColor: item.isBuyerMaker ? "#FFEBEB" : "#E9FBE9" }]}>
      <Text style={styles.text}>{item.time}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.quantity}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Recent Trades</Text> */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Time</Text>
        <Text style={styles.headerText}>Price (BTC)</Text>
        <Text style={styles.headerText}>Quantity</Text>
      </View>
      <FlatList
        data={trades}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tradeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
  },
});

export default RecentTrades;