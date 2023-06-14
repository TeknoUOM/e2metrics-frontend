import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#3778C2";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#3778C2",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 40,
    fontStyle: "bold",
  },
  description: {
    width: "20%",
    textAlign: "left",
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "17%",
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  // rate: {
  //     width: '17%',
  //     borderRightColor: borderColor,
  //     borderRightWidth: 1,
  //     textAlign: 'right',
  //     paddingRight: 8,
  // },
  // amount: {
  //     width: '17%',
  //     borderRightColor: borderColor,
  //     textAlign: 'right',
  //     paddingRight: 8,

  // },
});

const ReportTableRow = ({ items = [] }) => {
  return (
    <Fragment>
      {items.length > 0 &&
        items.map((item) => (
          <View style={styles.row}>
            <Text style={styles.description}>{item.Date}</Text>
            <Text style={styles.qty}>
              {item.IssuesFixingFrequency.toFixed(2)}
            </Text>
            <Text style={styles.qty}>{item.BugFixRatio.toFixed(2)}</Text>
            <Text style={styles.qty}>{item.CommitCount}</Text>
            <Text style={styles.qty}>{item.totalNumberOfLines}</Text>S
            <Text style={styles.qty}>{item.MeanLeadFixTime.toFixed(2)}</Text>
            <Text style={styles.qty}>{item.PullRequestFrequency}</Text>
            <Text style={styles.qty}>{item.WeeklyCommitCount}</Text>
            <Text style={styles.qty}>{item.OpenedIssuesCount}</Text>
            <Text style={styles.qty}>{item.AllIssuesCount}</Text>
            <Text style={styles.qty}>{item.WontFixIssuesRatio.toFixed(2)}</Text>
            <Text style={styles.qty}>{item.MeanPullRequestResponseTime}</Text>
            <Text style={styles.qty}>{item.PullRequestCount}</Text>
            <Text style={styles.qty}>
              {item.MeanLeadTimeForPulls.toFixed(2)}
            </Text>
            <Text style={styles.qty}>
              {item.ResponseTimeforIssue.toFixed(2)}
            </Text>
          </View>
        ))}
    </Fragment>
  );
};

export default ReportTableRow;
