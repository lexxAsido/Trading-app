import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import Charts from "./Framework/Screens/Charts";
// import Orderbook from "./Framework/Screens/Orderbooks";
// import RecentTrades from "./Framework/Screens/RecentTrades";
// import Header from "./Framework/Screens/Header";
import Charts from "./Charts";
import Orderbooks from "./Orderbooks";
import RecentTrades from "./RecentTrades";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("Charts");
  
  const renderContent = () => {
    switch (activeTab) {
      case "Charts":
        return <Charts />;
      case "Orderbook":
        return <Orderbooks />;
      case "RecentTrades":
        return <RecentTrades />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab("Charts")}>
          <Text style={[styles.tab, activeTab === "Charts" && styles.activeTab]}>
            Charts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Orderbook")}>
          <Text
            style={[styles.tab, activeTab === "Orderbook" && styles.activeTab]}
          >
            Orderbook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("RecentTrades")}>
          <Text
            style={[
              styles.tab,
              activeTab === "RecentTrades" && styles.activeTab,
            ]}
          >
            Recent Trades
          </Text>
        </TouchableOpacity>
      </View>
              
      {/* Content Section */}
      <View style={styles.content}>{renderContent()}</View>

      
      

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#e7e7e7",
    alignItems:"center"
  },
  tab: {
    fontSize: 16,
    color: "#aaa",
  },
  activeTab: {
    color: "#333",
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:5,
    elevation:10
    
  },
  openDoorsContainer: {
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f4f4f4",
  },
  openDoorsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  buySellButton: {
    backgroundColor: "#20C997",
    padding: 16,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buySellText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
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
});

export default Trade;