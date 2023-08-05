import React from "react";
import { FiUserX, FiUserMinus, FiUserCheck, FiUsers } from "react-icons/fi";
// import GraphComponent from './GraphComponent';
import { useState, useEffect } from "react";

function DashboardHome() {
  const [allClientsCount, setAllClientsCount] = useState([]);
  const [allConfirmedCount, setAllConfirmedCount] = useState([]);
  const [allPendingCount, setAllPendingCount] = useState([]);
  const [allCancelledCount, setAllCancelledCount] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const allClients = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getTotalClients`
      );
      const allClientsCount = await allClients.json(); // to get total number of clients stored in db
      setAllClientsCount(allClientsCount.count);



      const allConfirmed = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getConfirmedClients`
      );
      const allConfirmedClientCount = await allConfirmed.json(); // to get total number of confirmed clients stored in db
      setAllConfirmedCount(allConfirmedClientCount.count);


      const allPending = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getPendingClients`
      );
      const allPendingClientCount = await allPending.json(); // to get total number of Pending clients stored in db
      setAllPendingCount(allPendingClientCount.count);

      const allCancelled = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getCancelledClients`
      );
      const allCancelledClientCount = await allCancelled.json(); // to get total number of Cancelled clients stored in db
      setAllCancelledCount(allCancelledClientCount.count);


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="flex justify-between items-center w-[20%] h-[150px] bg-[var(--bg-dark-color)] p-5 rounded-md text-white m-2">
          <div>
            <h3>All</h3>
            <p>{allClientsCount} Clients</p>
          </div>
          <div>
            <FiUsers className="text-5xl" />
          </div>
        </div>

        <div className="flex justify-between items-center w-[20%] h-[150px] bg-[#28C76F] p-5 rounded-md text-white m-2">
          <div>
            <h3>Confirmed</h3>
            <p>{allConfirmedCount} Clients</p>
          </div>
          <div>
            <FiUserCheck className="text-5xl" />
          </div>
        </div>

        <div className="flex justify-between items-center w-[20%] h-[150px] bg-[#00CFE8] p-5 rounded-md text-white m-2">
          <div>
            <h3>Pending</h3>
            <p>{allPendingCount} Clients</p>
          </div>
          <div>
            <FiUserMinus className="text-5xl" />
          </div>
        </div>

        <div className="flex justify-between items-center w-[20%] h-[150px] bg-red-500 p-5 rounded-md text-white m-2">
          <div>
            <h3>Cancelled</h3>
            <p>{allCancelledCount} Clients</p>
          </div>
          <div>
            <FiUserX className="text-5xl" />
          </div>
        </div>
      </div>

      {/* <GraphComponent/> */}
    </div>
  );
}

export default DashboardHome;
