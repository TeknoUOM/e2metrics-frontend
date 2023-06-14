import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./Report";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewReport() {
  const fileName = "Monthly Report.pdf";
  const [reportData, setReportData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/metrics/getMonthlyReport?userId=8927e648-f434-4056-bd8c-892c3f70a83b&startDate=2023-06-01&endDate=2023-06-14"
      )
      .then((response) => {
        let data = [];
        let repos = [...new Set(response.data.map((repo) => repo.Reponame))];
        repos.map((repo) => {
          data.push({
            reponame: repo,
            repoData: response.data.filter((row) => row.Reponame == repo),
          });
        });

        setReportData(data);
      })
      .catch((error) => {
        console.error("Error fetching report data:", error);
        throw error;
      });
  }, []);

  return (
    <div className="App">
      <PDFViewer width={1000} height={800} showToolbar={false}>
        <PdfDocument reportdata={reportData} />
      </PDFViewer>

      <div className="download-link">
        <PDFDownloadLink
          document={<PdfDocument reportdata={reportData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Report"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default ViewReport;
