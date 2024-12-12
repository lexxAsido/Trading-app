import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';


const Header = () => {
    return (
        <View style={{backgroundColor:"#f3f3f3e8"}}>

            <View style={{ marginTop: 50, flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ffffff", padding: 10 }}>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                    <Image
                        source={require("../../assets/logo.png")}
                        style={styles.logo}
                    />
                    <Text style={{ fontWeight: "600", fontSize: 20 }}>Sisyphus</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TouchableOpacity>
                        <Image
                            source={require("../../assets/Avatar.png")}
                            style={styles.logo}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="globe-outline" size={28} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="menu" size={30} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 8, backgroundColor: "#ffffff", padding: 15 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5 name="bitcoin" size={24} color="orange" />
                    <Foundation name="dollar" size={20} color="white" style={{ backgroundColor: "#12e4a5", borderRadius: 20, paddingHorizontal: 5, borderWidth: 2 }} />
                    <View style={{ flexDirection: "row", gap: 20, marginLeft: 5 }}>
                        <Text>BTC/USDT</Text>
                        <AntDesign name="down" size={15} color="black" />
                        <Text style={{ color: "#20C997", fontWeight: "400" }}>$20,634</Text>
                        <Text style={{ color: "#20c997" }}>+520.80 (+1.25%)</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", gap:20, justifyContent:"center", backgroundColor:"#ffffff", marginTop:8, padding:15,}}>
                <View style={{flexDirection:"column", alignItems:"center"}}>
                <Text style={{ color:"gray"}}>24h change</Text>
                <Text style={{color:"#20C997", fontWeight:"600"}}>520.80 +1.25%</Text>
                </View>

                <View style={{flexDirection:"column", alignItems:"center", borderLeftWidth:1, borderRightWidth:1, paddingHorizontal:7}}>
                <Text style={{ color:"gray"}}><AntDesign name="arrowup" size={15} color="gray" />24h high</Text>
                <Text>520.80 +1.25%</Text>
                </View>

                <View style={{flexDirection:"column", alignItems:"center"}}>
                <Text style={{ color:"gray"}}><AntDesign name="arrowdown" size={15} color="gray" />24h low</Text>
                <Text>520.80 +1.25%</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#fff",
        elevation: 4,
    },
    logo: {
        width: 30,
        height: 30,
    },
    pairDetails: {
        alignItems: "center",
    },
    pair: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "#00C49A",
    },
});

export default Header;
