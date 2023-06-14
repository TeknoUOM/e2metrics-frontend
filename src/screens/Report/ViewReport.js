import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./Report";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@mui/material";

function ViewReport() {
  const fileName = "Monthly Report.pdf";
  const { userId, startDate, endDate } = useParams();
  const [reportData, setReportData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/metrics/getMonthlyReport?userId=${userId}&startDate=${startDate}&endDate=${endDate}`
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
            loading ? (
              <>
                <ClipLoader />
              </>
            ) : (
              "Download Report"
            )
          }
        </PDFDownloadLink>
      </div>
      <Button
        variant="contained"
        onClick={() => history.push("/settings/reports")}
      >
        Back
      </Button>
    </div>
  );
}

export default ViewReport;
