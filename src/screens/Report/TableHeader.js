import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#3778C2";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#3778C2",
    backgroundColor: "#3778C2",
    color: "#fff",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 40,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  description: {
    width: "40%",
  },

  qty: {
    width: "17%",
    borderLeftColor: "#1E0B03",
    borderLeftWidth: 1,
  },
});

const TableHeader1 = () => (
  <View style={styles.container}>
    <Text style={styles.qty}>Date</Text>
    <Text style={styles.qty}>Issues Fixing Frequency</Text>
    <Text style={styles.qty}>Bug Fix Ratio</Text>
    <Text style={styles.qty}>Commit Count</Text>
    <Text style={styles.qty}>total Number Of Lines</Text>
    <Text style={styles.qty}>Mean Lead Fix Time</Text>
    <Text style={styles.qty}>Pull Request Frequency</Text>
    <Text style={styles.qty}>Weekly CommitCount</Text>
    <Text style={styles.qty}>Opened Issues Count</Text>
    <Text style={styles.qty}>All Issues Count</Text>
    <Text style={styles.qty}>Wont Fix Issues Ratio</Text>
    <Text style={styles.qty}>Mean Pull Request Response Time</Text>
    <Text style={styles.qty}>Pull Request Count</Text>
    <Text style={styles.qty}>Mean Lead Time For Pulls</Text>
    <Text style={styles.qty}>Response Time for Issue</Text>
  </View>
);

export default TableHeader1;
