import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../userSlice";

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  //handle Edit for my profile page
  const handleEdit = (e, index) => {};

  //handle  Remove for my profile page
  const handleRemove = (e, index) => {
    const newUser = { ...user, addressses: { ...user.addresses } };
    newUser.addresses.splice(index, 1);
  };

  return (
    <div>
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            Name:{user.name ? user.name : "New User"}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
            email address: {user.email}
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Your Addresses :</p>
          {user.addresses.map((address) => (
            <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.pinCode}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Phone:{address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.city}
                </p>
              </div>

              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <button
                  onClick={(e) => handleEdit(e, index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleRemove(e, index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
