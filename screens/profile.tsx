import React from 'react'

import {
    View,
    Text,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const address = {
    pin: "450116",
    area: "216 St, Paul's Rd",
    city: "London",
    country: "United Kingdom"
}

const account = {
    acNum: "204356XXXXXXXXX",
    holderName: "Groot",
    codeIFSC: "SBIN00428",
}

const user = {
    email: "user007@gmial.com",
    password: "iamGroot",
    address: address,
    account: account,
}

const Profile = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.personal}>
                <View style={styles.picContainer}>
                    <Image source={require('../assets/images/profileLogo.png')} style={styles.pic} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.heading}>Personal Details</Text>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} value={user.email}></TextInput>

                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} value={user.password} secureTextEntry={true} ></TextInput>

                    <TouchableOpacity>
                        <Text style={styles.change}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.line}/>

            <View style={styles.form}>
                <Text style={styles.heading}>Business Address Details</Text>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} value={user.address.pin}></TextInput>

                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} value={user.address.area}></TextInput>

                <Text style={styles.label}>City</Text>
                <TextInput style={styles.input} value={user.address.city}></TextInput>

                <Text style={styles.label}>State</Text>
                <TextInput style={styles.input} value={user.address.city}></TextInput>

                <Text style={styles.label}>Country</Text>
                <TextInput style={styles.input} value={user.address.country}></TextInput>
            </View>

            <View style={styles.line}/>

            <View style={styles.form}>
                <Text style={styles.heading}>Bank Account details</Text>
                <Text style={styles.label}>Bank Account Number</Text>
                <TextInput style={styles.input} value={user.account.acNum}></TextInput>

                <Text style={styles.label}>Account Holder's Name</Text>
                <TextInput style={styles.input} value={user.account.holderName}></TextInput>

                <Text style={styles.label}>IFSC Code</Text>
                <TextInput style={styles.input} value={user.account.codeIFSC}></TextInput>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    personal: {

    },
    form: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20,
        //paddingHorizontal: 20,
    },
    picContainer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    pic: {
        height: 120,
        width: 120,
    },
    heading: {
        fontFamily: 'Montserrat-Bold',
        color: '#000000',
        fontSize: 15,
    },
    label: {
        fontFamily: 'Montserrat-Regular',
        marginTop: 20,
        fontSize: 13,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        marginTop: 5,
    },
    change: {
        alignSelf: 'flex-end',
        textDecorationLine: 'underline',
        color: '#f83758',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 10,
        marginTop: 10,
    },
    line: {
        height: 0.5,
        backgroundColor: 'black',
        marginVertical: 20,
    },
    btn: {
        width: '100%',
        backgroundColor: '#F83758',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
    }
})