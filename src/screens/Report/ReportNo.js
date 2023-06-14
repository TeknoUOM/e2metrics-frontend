import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    reportNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    reportDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    reportDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60
    }
});

const ReportNo = ({ report }) => (
    <Fragment>
        <View style={styles.reportNoContainer}>
            <Text style={styles.label}>Month:</Text>
            <Text style={styles.reportDate}>{report.Report_no}</Text>
        </View >
        <View style={styles.reportDateContainer}>
            <Text style={styles.label}>Date: </Text>
            <Text >{report.trans_date}</Text>
        </View >
    </Fragment>
);

export default ReportNo;