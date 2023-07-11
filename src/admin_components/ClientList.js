import React from 'react';



function ClientList() {

  const data = [
    {
      name: 'Shanya',
      email: 'shanyasahu11@gmail.com',
      phone: '6266060475',
      category: 'Website Development',
      date: '06/07/2023',
      status: 'Confirmed',
    },
    {
      name: 'Siya',
      email: 'siya@gmail.com',
      phone: '6266060475',
      category: 'App Development',
      date: '05/07/2023',
      status: 'Pending',
    },
    {
      name: 'Mayra',
      email: 'mayra@gmail.com',
      phone: '6266060475',
      category: 'Software Development',
      date: '03/07/2023',
      status: 'Canceled',
    },
    {
      name: 'Shanya',
      email: 'shanyasahu11@gmail.com',
      phone: '6266060475',
      category: 'Website Development',
      date: '06/07/2023',
      status: 'Confirmed',
    },
    {
      name: 'Siya',
      email: 'siya@gmail.com',
      phone: '6266060475',
      category: 'App Development',
      date: '05/07/2023',
      status: 'Pending',
    },
    {
      name: 'Mayra',
      email: 'mayra@gmail.com',
      phone: '6266060475',
      category: 'Software Development',
      date: '03/07/2023',
      status: 'Canceled',
    },
    {
      name: 'Shanya',
      email: 'shanyasahu11@gmail.com',
      phone: '6266060475',
      category: 'Website Development',
      date: '06/07/2023',
      status: 'Confirmed',
    },
    {
      name: 'Siya',
      email: 'siya@gmail.com',
      phone: '6266060475',
      category: 'App Development',
      date: '05/07/2023',
      status: 'Pending',
    },
    {
      name: 'Mayra',
      email: 'mayra@gmail.com',
      phone: '6266060475',
      category: 'Software Development',
      date: '03/07/2023',
      status: 'Canceled',
    },
    {
      name: 'Shanya',
      email: 'shanyasahu11@gmail.com',
      phone: '6266060475',
      category: 'Website Development',
      date: '06/07/2023',
      status: 'Confirmed',
    },
    {
      name: 'Siya',
      email: 'siya@gmail.com',
      phone: '6266060475',
      category: 'App Development',
      date: '05/07/2023',
      status: 'Pending',
    },
    {
      name: 'Mayra',
      email: 'mayra@gmail.com',
      phone: '6266060475',
      category: 'Software Development',
      date: '03/07/2023',
      status: 'Canceled',
    }
    //this data will come from database
  ];


  return (
    <div>
      <section>
        <h5 className='text-lg'>Client List</h5>
        <p>All clients</p>
        
        <div className="table-section m-5 bg-white p-5 border-2 rounded-md">
          <div className="tbl-feature"></div>
          <table className='w-full text-left'>
            <thead>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Phone
              </th>
              <th>
                Service 
              </th>
              <th>
                Date
              </th>
              <th>
                Status
              </th>
              
            </thead>


          

{data.length === 0 ? (
  <tr>
    <td colSpan="8" className='text-center'>No Client Available!</td>
  </tr>
) : (
  data.map((item, index) => (
    <tr
      key={index}
      className="border-b-[1px] hover:bg-[#F5F5F5] text-[#637381]"
    >
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
      
    </tr>
  ))
)}


            
          </table>
        </div>
      </section>
    </div>
  );
}

export default ClientList;
