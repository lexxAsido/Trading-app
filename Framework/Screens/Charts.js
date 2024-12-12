import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Svg, { Rect, Line } from "react-native-svg";

const Charts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      const candle = json.k;
      const formattedCandle = {
        time: candle.t,
        open: parseFloat(candle.o),
        high: parseFloat(candle.h),
        low: parseFloat(candle.l),
        close: parseFloat(candle.c),
      };
      setChartData((prev) => [...prev.slice(-20), formattedCandle]);
    };

    return () => ws.close();
  }, []);

  const width = 300;
  const height = 200;
  const candleHeightMultiplier = 0.1;
  const candleWidth = chartData.length ? width / chartData.length : 10;

  return (
    <SafeAreaView style={styles.container}>
     

      {/* Candlestick Chart */}
      <Svg style={styles.chartContainer}>
        <Svg width={width} height={height}>
          {chartData.map((candle, index) => {
            const x = index * candleWidth;
            const yOpen = height - candle.open * candleHeightMultiplier;
            const yClose = height - candle.close * candleHeightMultiplier;
            const yHigh = height - candle.high * candleHeightMultiplier;
            const yLow = height - candle.low * candleHeightMultiplier;

            const color = candle.open > candle.close ? "#FF5252" : "#00C49A";

            return (
              <React.Fragment key={index}>
                <Line
                  x1={x + candleWidth / 2}
                  y1={yHigh}
                  x2={x + candleWidth / 2}
                  y2={yLow}
                  stroke={color}
                />
                <Rect
                  x={x}
                  y={Math.min(yOpen, yClose)}
                  width={candleWidth - 2}
                  height={Math.abs(yOpen - yClose)}
                  fill={color}
                />
              </React.Fragment>
            );
          })}
        </Svg>
      </Svg>

      {/* Tabs Section */}
      <View style={styles.tabs}>
        <Text style={styles.tab}>Charts</Text>
        <Text style={[styles.tab, styles.inactiveTab]}>Orderbook</Text>
        <Text style={[styles.tab, styles.inactiveTab]}>Recent Trades</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#20C997",
  },
  change: {
    fontSize: 14,
    color: "#20C997",
  },
  chartContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
  },
  tab: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  inactiveTab: {
    color: "#aaa",
  },
});

export default Charts;
