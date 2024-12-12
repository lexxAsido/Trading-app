import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Modal, TextInput, } from "react-native";
import Charts from "./Framework/Screens/Charts";
import Orderbook from "./Framework/Screens/Orderbooks";
import RecentTrades from "./Framework/Screens/RecentTrades";
import Header from "./Framework/Screens/Header";
import Trade from "./Framework/Screens/Trade";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeBs, setActiveBs] = useState("Buy");
  const [activeLms, setActiveLms] = useState("Limit");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Trade />

        <View>
          <View style={{ alignItems: "center", paddingVertical: 13, borderTopWidth: 1, borderColor: "#ffffff", backgroundColor: "#f4f4f4", marginTop: 20, flexDirection: "row", justifyContent: "space-evenly" }}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#131212", backgroundColor: "#ffffff", paddingVertical: 7, paddingHorizontal: 15, borderRadius: 10, elevation: 10 }}>Open Order</Text>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Position</Text>
          </View>

          <View style={{ height: 350, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>No Open Orders</Text>
            <Text style={{ textAlign: "center" }}>No open doors available at the moment. Stay tuned for updates or explore other features in the app!</Text>
          </View>

        </View>


        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginBottom: 10 }}>
          <TouchableOpacity
            style={{ backgroundColor: "#25c26e", paddingVertical: 10, paddingHorizontal: 40, borderRadius: 10 }}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buySellText}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#ff554a", paddingVertical: 10, paddingHorizontal: 40, borderRadius: 10 }}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buySellText}>Sell</Text>
          </TouchableOpacity>
        </View>



        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 6, borderRadius: 10, backgroundColor: "#f1f1f1", gap: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.modalOption,
                    activeBs === "Buy" && styles.activeOption,]}
                  onPress={() => setActiveBs("Buy")}>
                  <Text
                    style={[
                      styles.modalOptionText,
                      activeBs === "Buy" && styles.activeModalText,
                    ]}>
                    Buy
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.modalOption,
                    activeBs === "Sell" && styles.activeOption,
                  ]}
                  onPress={() => setActiveBs("Sell")}>
                  <Text
                    style={[
                      styles.modalOptionText,
                      activeBs === "Sell" && styles.activeSellText,
                    ]}>
                    Sell
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row", width: 350, justifyContent: "space-around", padding: 5, marginTop: 4 }}>
                <TouchableOpacity
                  style={[
                    styles.lmsOption,
                    activeLms === "Limit" && styles.activeLmsOp,
                  ]}
                  onPress={() => setActiveLms("Limit")}>
                  <Text style={[styles.lmsText, activeLms === "Limit" && styles.activeLmsText]}>
                    Limit
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.lmsOption,
                    activeLms === "Market" && styles.activeLmsOp,
                  ]}
                  onPress={() => setActiveLms("Market")}>
                  <Text style={[styles.lmsText, activeLms === "Market" && styles.activeLmsText]}>
                    Market
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.lmsOption,
                    activeLms === "Stop Limit" && styles.activeLmsOp,
                  ]}
                  onPress={() => setActiveLms("Stop Limit")}>
                  <Text style={[styles.lmsText, activeLms === "Stop Limit" && styles.activeLmsText]}>
                    Stop Limit
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "column", gap: 15, marginBottom: 10 }}>
                <TextInput
                  style={{ borderWidth: 2, borderRadius: 10, borderColor: "#f1f1f1", paddingVertical: 10 }}
                  placeholder="Limit Price                                                   0.00USD" />
                <TextInput
                  style={{ borderWidth: 2, borderRadius: 10, borderColor: "#f1f1f1", paddingVertical: 10 }}
                  placeholder="Amount                                                        0.00USD" />
                <TextInput
                  style={{ borderWidth: 2, borderRadius: 10, borderColor: "#f1f1f1", paddingVertical: 10 }}
                  placeholder="Type                                         Good Till Cancelled" />


                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => setIsChecked(!isChecked)}>
                    {isChecked && <AntDesign name="check" size={15} color="white" />}
                  </TouchableOpacity>
                  <Text style={styles.label}>
                    Post Only
                    <AntDesign name="exclamationcircleo" size={15} color="gray" />
                  </Text>
                </View>

                <View style={{ flexDirection: "row", width: 320, justifyContent: "space-between" }}>
                  <Text>Total</Text>
                  <Text>0.00</Text>
                </View>

                <TouchableOpacity style={{}}>
                  <LinearGradient
                    start={{ x: 0, y: 1.5 }} end={{ x: 1.5, y: 0 }}
                    colors={["blue", "purple", "red"]}
                    style={{ borderRadius: 25, padding: 10 }}
                  >
                    <Text style={{ color: 'white', textAlign: "center" }}>Buy BTC</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View>

              </View>
              <View>

                <View>
                  <TouchableOpacity style={{ flexDirection: "row", width: 320, justifyContent: "space-between", colors: "#f1f1f1ff" }}>
                    <Text>Total Account Value</Text>
                    <Text>NGN</Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "800" }}>0.00</Text>

                  <View style={{ flexDirection: "row", width: 320, gap: 200, marginTop: 10 }}>
                    <View>
                      <Text>Open Orders</Text>
                      <Text style={{ fontWeight: "800" }}>0.00</Text>
                    </View>

                    <View>
                      <Text>Available</Text>
                      <Text style={{ fontWeight: "800" }}>0.00</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={{ width: 100, flexDirection: "row", marginVertical: 10 }}>
                    <Text style={{ color: "#ffffff", backgroundColor: "#2764ff", textAlign: "center", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}>Deposit</Text>
                  </TouchableOpacity>
                </View>

              </View>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 10,
  },
  openDoorsContainer: {
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f4f4f4",
    marginTop: 20,
  },
  openDoorsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#20C997",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOption: {
    padding: 5,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: "#f1f1f1"
  },
  activeOption: {
    backgroundColor: "#ffffff",
  },
  modalOptionText: {
    fontWeight: "600",
    color: "#333",
  },
  activeModalText: {
    color: "#25c26e",
  },
  activeSellText: {
    color: "#f50808"
  },
  modalButton: {
    backgroundColor: "#20C997",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  lmsOption: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    backgroundColor: "transparent",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  activeLmsOp: {
    backgroundColor: "gray",
  },
  lmsText: {
    color: "#130303",
  },
  activeLmsText: {
    color: "#ffffff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});
