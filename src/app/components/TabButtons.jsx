import React from 'react'

const TabButtons = ({ active, selectTab, children }) => {
const buttonClasses = active ? 'text-black border-b border-primary-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-black ${buttonClasses}`}>
        {children}
        </p>
    </button>
  )
}

export default TabButtons
