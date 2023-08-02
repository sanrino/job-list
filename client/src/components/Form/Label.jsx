import React from 'react'

const Label = ({ title, required }) => {
  return (
    <label className="label">
      <span className="label-text">{title}</span>
      {required && <strong className="text-red-500 mr-auto">*</strong>}
    </label>
  )
}

export { Label };