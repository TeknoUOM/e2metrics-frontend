import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import ReportTitle from "./ReportTitle";
import ThankYouMsg from "./ThankYouMsg";
import ReportItemsTable from "./ReportItemsTable";
import TableTitle from "./TableTitle";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 90,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PdfDocument = ({ reportdata }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        {/*<Image style={styles.logo} src={logo} />*/}
        <ReportTitle title={"Monthly Report"} />
        {reportdata.map((repoData) => {
          return (
            <>
              <TableTitle title={repoData.reponame} />
              <ReportItemsTable report={repoData.repoData} />
            </>
          );
        })}
        <ThankYouMsg />
      </Page>
    </Document>
  );
};

export default PdfDocument;
