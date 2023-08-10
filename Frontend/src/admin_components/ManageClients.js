import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { toast, Toaster } from 'react-hot-toast';

function ManageClients() {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function deleteDataSuccessFlag() {
    setTimeout(() => {
      toast.success('Client data deleted successfully');
    }, 1000);
  }

  const [showEditPopup, setShowEditPopup] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    status: '',
    updatedAt: Date.now(),
  });

  const updateClientDataHandler = async () => {
    try {
      if (!selectedItemId) {
        console.error('No item selected for update');
        toast.error('No item selected for update');
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/updateClientData/${selectedItemId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log('Client data updated successfully!');
        toast.success('Client data updated successfully!');
        setShowEditPopup(false);
        fetchData();
      } else {
        console.error('Error updating client data');
        toast.error('Error updating client data');
      }
    } catch (error) {
      console.error('Error updating client data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getClientData`);
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [deleteConfirm, setDeleteConfirm] = useState(false);

  function handleEdit(itemId) {
    setSelectedItemId(itemId);
    setShowEditPopup(true);

    setTimeout(() => {
      toast.dismiss();
    }, 1000);
  }

  function handleDelete(itemId) {
    setSelectedItemId(itemId);
    setDeleteConfirm(true);

    setTimeout(() => {
      toast.dismiss();
    }, 1000);
    deleteRow();

  }

  // function handleDeleteClick(toastId) {
  //   toast.dismiss(toastId);
  //   deleteRow();
  // }

  function deleteRow() {
    if (selectedItemId) {
      fetch(`${process.env.REACT_APP_BASE_URL}/deleteClientData/${selectedItemId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setData((prevData) => prevData.filter((item) => item._id !== selectedItemId));
            deleteDataSuccessFlag();
          } else {
            setTimeout(() => {
              toast.error('Error deleting client data');
            }, 1000);
          }
        })
        .catch((error) => {
          console.error('Error deleting client data:', error);
          setTimeout(() => {
            toast.error('Error deleting client data');
          }, 1000);
        })
        .finally(() => {
          setDeleteConfirm(false);
          setSelectedItemId(null);
        });
    }
  }

  return (
    <div>
      {showEditPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute bg-white shadow-lg rounded-lg p-4 w-[50%]">
            <h4>Edit Client Data</h4>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='p-1 border-2 rounded-md w-full mb-5'
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='p-1 border-2 rounded-md w-full mb-5'
            />
            <label htmlFor="">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='p-1 border-2 rounded-md w-full mb-5'
            />
            <label htmlFor="">Service</label>
            {/* <input
              type="text"
              placeholder="Service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className='p-1 border-2 rounded-md w-full mb-5'
            /> */}
             <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className='p-1 border-2 rounded-md w-full mb-5'
            >
               <option value="" disabled>Select</option>
                  <option value="Website-development" >Website Development</option>
                  <option value="software-development">Software Development</option>
                  <option value="mobile-app-development">Mobile Application Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
            </select>
            <label htmlFor="">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className='p-1 border-2 rounded-md w-full mb-5'
            >
               <option value="" disabled>Select</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <div className="mt-4 flex justify-start items-center">
              <button
                className="border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
                onClick={updateClientDataHandler}
              >
                Save
              </button>
              <button
                className="ml-5 border-2 rounded-md py-3 px-8 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold flex items-center transition-all hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
                onClick={() => setShowEditPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && <div><Toaster/></div>}

      <section>
        <h5 className="text-lg">Client List</h5>
        <p>Manage your client</p>

        <div className="table-section m-5 bg-white p-5 border-2 rounded-md">
          <div className="tbl-feature"></div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    No Client Available!
                  </td>
                </tr>
              ) : (
                data.slice().reverse().map((item) => (
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
                    <td className='capitalize'>{item.service}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString("en-US")}</td>
                    <td>
                      <button
                        className={`py-2 px-3 text-sm rounded-md min-w-[100px] text-white ${
                          item.status === 'Confirmed'
                            ? 'bg-[#28C76F]'
                            : item.status === 'Pending'
                            ? 'bg-[#00CFE8]'
                            : item.status === 'Cancelled'
                            ? 'bg-red-500'
                            : 'bg-[grey]'
                        }`}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="flex">
                      <BiEdit
                        className="text-2xl mr-4 cursor-pointer"
                        onClick={() => handleEdit(item._id)}
                      />
                      <MdDeleteOutline
                        className="text-2xl text-[red] cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      />
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
