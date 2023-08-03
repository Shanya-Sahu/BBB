import React, { useState, useEffect } from 'react';
import {BiEdit} from 'react-icons/bi';
import {MdDeleteOutline} from 'react-icons/md';
import { toast, Toaster } from 'react-hot-toast';



function ManageClients() {

  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/getClientData");
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [deleteConfirm , setDeleteConfirm] = useState(false);

  function handleEdit(){
    setTimeout(()=>{
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 absolute top-72`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Do you want to edit?
                </p>
                <p className="mt-1 text-sm text-gray-500">
                 Edit client data
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            <BiEdit className='text-4xl'/>
            </button>
          </div>
        </div>
      ))
      },1000);

  
  }


  function handleDelete(itemId){
    setSelectedItemId(itemId);
    setDeleteConfirm(true);
    

    setTimeout(()=>{
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 absolute top-72`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Do you want to delete
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  It's permanent deleted in your db
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => handleDeleteClick(t.id)} 
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
             <MdDeleteOutline className='text-4xl text-red-600'/>
            </button>
          </div>
        </div>
      ))
      },1000);

   
  }

  function handleDeleteClick(toastId) {
    toast.dismiss(toastId);
    deleteRow();
  }

  
  function deleteRow() {
    // Make sure there is a selected item to delete
    if (selectedItemId) {
      fetch(`http://localhost:3001/api/v1/deleteClientData/${selectedItemId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setData((prevData) => prevData.filter((item) => item._id !== selectedItemId));
            toast.success('Client data deleted successfully');
          } else {
            toast.error('Error deleting client data');
          }
        })
        .catch((error) => {
          console.error('Error deleting client data:', error);
          toast.error('Error deleting client data');
        })
        .finally(() => {
          setDeleteConfirm(false);
          setSelectedItemId(null);
        });
    }
  }




  return (
    <div>
      {deleteConfirm ?  <div><Toaster/></div> : ""}
      <section>
        <h5 className='text-lg'>Client List</h5>
        <p>Manage your client</p>
        
        <div className="table-section m-5 bg-white p-5 border-2 rounded-md">
          <div className="tbl-feature"></div>
          <table className='w-full text-left'>
            <thead>
            <tr>
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
              </tr>
            </thead>


<tbody>
{data.length === 0 ? (
  <tr>
    <td colSpan="8" className='text-center'>No Client Available!</td>
  </tr>
) : (
  data.map((item) => (
    <tr
      key={item._id}
      className="border-b-[1px] hover:bg-[#F5F5F5] text-[#637381]"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.service}</td>
      <td>{item.createdAt.slice(0, 10)}</td>
      <td><button
    className={`py-2 px-3 text-sm rounded-md min-w-[100px] text-white ${
      item.status === 'Confirmed' ? 'bg-[#28C76F]' :
      item.status === 'Pending' ? 'bg-[#00CFE8]' :
      item.status === 'Cancelled' ? 'bg-red-500' :
      'bg-[grey]'
    }`}
  >
    {item.status}
  </button></td>
      <td className="flex">
        <BiEdit className="text-2xl mr-4 cursor-pointer" onClick={handleEdit} />
        <MdDeleteOutline className="text-2xl text-[red] cursor-pointer"  onClick={() => handleDelete(item._id)}/>
      </td>
    </tr>
  ))
)}

</tbody>
            
          </table>
        </div>
      </section>
    </div>
  );
}

export default ManageClients;
