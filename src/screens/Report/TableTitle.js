import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#807B79',
        letterSpacing: 2,
        fontSize: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const TableTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default TableTitle;