import React, { useState, useEffect } from "react";

function ClientList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getClientData`
      );
      const res = await response.json(); // Add await here
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <section>
        <h5 className="text-lg">Client List</h5>
        <p>All clients</p>

        <div className="table-section m-5 bg-white p-5 border-2 rounded-md">
          <div className="tbl-feature"></div>
          <table className="w-full text-left">
            <thead>
              <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th></tr>
            </thead>

<tbody>

            {data.slice().reverse().map((item) => (
              <tr
              key={item._id}
                className="border-b-[1px] hover:bg-[#F5F5F5] text-[#637381]"
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className='capitalize'>{item.service}</td>
                <td>{new Date(item.createdAt).toLocaleDateString("en-US")}</td>
                <td>{item.status}</td>
              </tr>
            ))}

              
</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ClientList;
