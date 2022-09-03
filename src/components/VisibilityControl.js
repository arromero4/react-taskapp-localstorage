import React from 'react'

export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete it?')){
      cleanTasks()
    }
  }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
        <div className='form-check form-switch'>
        <input
          type="checkbox"
          className='form-check-input'
          checked = {isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show tasks Done</label>
        </div>

        <button 
        className='btn btn-danger btn-sm'
        onClick={handleDelete}>
            Clear
        </button>
      </div>
  )
}
