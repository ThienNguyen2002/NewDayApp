import react from "react";
import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";

export default function FlatButton( {text, onPress} ) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}> 
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
    }


const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 50,
        backgroundColor: '#13293D'
    },
    buttonText: {
        fontFamily: 'century',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
});
