import React from 'react';
import {BiEdit} from 'react-icons/bi';
import {MdDeleteOutline} from 'react-icons/md';


function ManageClients() {

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
        <p>Manage your client</p>
        
        <div className="table-section m-5 bg-white p-5 border-2 rounded-md">
          <div className="tbl-feature"></div>
          <table className='w-full text-left'>
            <thead>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
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
              <th>
                Action
              </th>
            </thead>


            {/* <tr className='border-b-[1px] hover:bg-[#F5F5F5] text-[#637381]'>
              <td>
              <input type="checkbox" name="" id="" />
              </td>
              <td>Shanya</td>
              <td>shanyasahu11@gmail.com</td>
              <td>6266060475</td>
              <td>Website Development</td>
              <td>06/07/2023</td>
              <td>Confirmed</td>
              <td className='flex'><BiEdit className='text-2xl mr-4 cursor-pointer'/> <MdDeleteOutline className='text-2xl text-[red] cursor-pointer'/></td>
            </tr> */}


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
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td><button
    className={`py-2 px-3 text-sm rounded-md min-w-[100px] text-white ${
      item.status === 'Confirmed' ? 'bg-[#28C76F]' :
      item.status === 'Pending' ? 'bg-[#00CFE8]' :
      item.status === 'Canceled' ? 'bg-red-500' :
      'bg-[grey]'
    }`}
  >
    {item.status}
  </button></td>
      <td className="flex">
        <BiEdit className="text-2xl mr-4 cursor-pointer" />
        <MdDeleteOutline className="text-2xl text-[red] cursor-pointer" />
      </td>
    </tr>
  ))
)}


            
          </table>
        </div>
      </section>
    </div>
  );
}

export default ManageClients;
