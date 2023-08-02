import React from 'react'
import { Label } from './Label'

const Input = ({ label, name, placeholder, register, required }) => {

  return (
    <>
      <Label title={label} required={required} />

      <input
        className="input"
        placeholder={placeholder}

        {...register(name, {
          required,

          ...name === "email" &&
          {
            maxLength: {
              value: 50,
              message: 'The email should have at most 50 characters'
            },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email address must be a valid address!',
            }
          },

          // validate: {
          //   maxLength: (v) =>
          //     v.length <= 5 || "The email should have at most 50 characters",
          //   matchPattern: (v) =>
          //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          //     "Email address must be a valid address",
          // },
        })}
      />
    </>
  )
}

export { Input }