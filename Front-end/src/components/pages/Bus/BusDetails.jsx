import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { busDetails, deleteBus } from "../../../actions/Bus";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import SideNav from "../../layout/SideNav";
import DataTable from "react-data-table-component";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const BusDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { busData, success } = useSelector((state) => state.BusApi);

  const [pending, setPending] = useState(true);

  const [rows, setRows] = useState([]);

  console.log(rows);
  console.log(success);

  useEffect(() => {
    dispatch(busDetails());
  }, []);

  useEffect(() => {
    if (success == "Deleted successfully") {
      swal("deleted Successfully!", {
        icon: "success",
      });
      dispatch(busDetails());
    }
    if (success == "Bus Added Success") {
      swal("save Successfully!", {
        icon: "success",
      });
      dispatch(busDetails());
    }
  }, [success]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(busData?.resultData);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [busData]);

  const clickHandler = (e) => {
    const busId = e.target.id;
    // console.log(busId);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this bus!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBus(busId));
      } else {
        swal("Your bus still Running ..!");
      }
    });
  };

  const handleUpdate = (e) => {
    const busId = e.target.id;
    navigate(`/editbus/${busId}`);
  };

  const columns = [
    {
      name: "Bus Name",
      selector: (row) => row.busName,
      sortable: true,
    },
    {
      name: "Bus Type",
      selector: (row) => row.busType,
    },
    {
      name: "Availability",
      selector: (row) => row.availability,
    },
    {
      name: "Facilities",
      selector: (row) => row.facilities,
    },
    {
      name: "Total Seats",
      selector: (row) => row.totalSeats,
    },
    {
      name: "Ratings",
      selector: (row) => row.ratings,
    },
    {
      cell: (row) => (
        <div className="row">
          <button
            className="btn bg-warning d-inline mr-2 p-1"
            onClick={(e) => clickHandler(e)}
            id={row.busId}
          >
            Delete
          </button>
          <button
            className="btn bg-primary d-inline p-2"
            onClick={(e) => handleUpdate(e)}
            id={row.busId}
          >
            Update
          </button>
        </div>
      ),
      name: "ACTION",
      selector: (row) => row.busId,
    },
  ];

  return (
    <>
      <Header />
      <SideNav />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row d-flex justify-content-end m-2">
              <Link to="/addbus" className="btn btn-info">
                Add New Bus
              </Link>
            </div>
            <DataTable
              title="Bus List"
              columns={columns}
              data={rows}
              progressPending={pending}
              pagination
              theme="dark"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BusDetails;
