import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import admin from "../assets/admin.png";

function AdminProfile() {
  return (
    <div>
      <h5 className="text-lg">Profile</h5>
      <p>Admin Profile</p>

      <div className="m-5 bg-white p-5 border-2 rounded-md">
        <div className="profile-head min-h-[100px] rounded-md"> </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="relative cursor-pointer mr-10">
              <div className="profile-pic rounded-full bg-white p-2 shadow-xl w-[150px] h-[150px] relative bottom-14 left-5 overflow-hidden">
                <img
                  src={admin}
                  alt="profile-img"
                  className="rounded-full w-fit h-fit "
                />
                <AiOutlineCloudUpload className="absolute top-24 left-16 text-4xl text-white bg-[var(--primary-color)] rounded-full p-2" />
              </div>

              <input
                type="file"
                id="imgInp"
                className="absolute top-0 invisible w-[150px] h-[150px] rounded-full z-10 left-5"
              />
            </div>
            <div className="pt-6">
              <h5 className="text-lg">Admin Name</h5>
              <p>Updates Your Photo and Personal Details.</p>
            </div>
          </div>
          <div className="flex h-fit pt-6">
            <button className="min-w-[120px] mx-1 border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
              Save
            </button>
            <button className="min-w-[120px] mx-1 border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[#637381] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
              Cancel
            </button>
          </div>
        </div>

        <form className="w-full flex justify-between items-center flex-wrap -mt-10">
          <div className="w-[49%] my-3">
            <label htmlFor="" className="text-sm">
              First Name
            </label>
            <br />
            <input
              type="text"
              className="p-1 border-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-[49%] my-3">
            <label htmlFor="" className="text-sm">
              Last Name
            </label>
            <br />
            <input
              type="text"
              className="p-1 border-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-[49%] my-3">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <br />
            <input
              type="email"
              className="p-1 border-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-[49%] my-3">
            <label htmlFor="" className="text-sm">
              Phone
            </label>
            <br />
            <input
              type="number"
              className="p-1 border-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-[49%] my-3">
            <label htmlFor="" className="text-sm">
              Username
            </label>
            <br />
            <input
              type="text"
              className="p-1 border-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-[49%] my-3">
            <label htmlFor="" className="text-sm">
              Password
            </label>
            <br />
            <input
              type="password"
              className="p-1 border-2 rounded-md w-full"
              required
            />
          </div>

          <div className="w-full mt-5 flex h-fit ">
            <button className="min-w-[120px] mx-1 border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
              Submit
            </button>
            <button className="min-w-[120px] mx-1 border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[#637381] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;
