import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import BarLoader from "react-spinners/BarLoader";

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const userId = sessionStorage.getItem("userId");
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Date Time",
      selector: (row) => row.timestamp,
    },
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Subscription",
      selector: (row) => row.subscription,
    },
    {
      name: "Amount",
      selector: (row) => row.amountValue,
    },
    {
      name: "Currency Code",
      selector: (row) => row.amountCurrencyCode,
    },
  ];
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/payment/savePayment?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <p className="is-size-2">Billing</p>
      <DataTable
        data={data}
        columns={columns}
        paginationPerPage={10}
        pagination={true}
        progressPending={loading}
        progressComponent={<BarLoader color={"#3CE794"} />}
      />
    </div>
  );
};

export default Billing;
