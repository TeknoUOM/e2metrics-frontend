import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

const ReportTo = ({ report }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>User:</Text>
        <Text>Name: {report.fullname}</Text>
        <Text>user ID: {report.id}</Text>
        {/* <Text>{invoice.phone}</Text> */}
        <Text>Email: {report.email}</Text>
    </View>
);


export default ReportTo;