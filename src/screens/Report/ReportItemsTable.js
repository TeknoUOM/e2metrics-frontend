import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import TableHeader from "./TableHeader";
import ReportTableRow from "./ReportTableRow";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#3778C2",
  },
});

const ReportItemsTable = ({ report = [] }) => {
  return (
    <View style={styles.tableContainer}>
      <TableHeader />
      <ReportTableRow items={report} />
    </View>
  );
};

export default ReportItemsTable;
