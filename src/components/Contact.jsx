import React from 'react'

const Contact = () => {
  return (
    <div
    name="contact"
    id="contact"
    className="w-full h-screen bg-[#0a192f] text-gray-300"
  >
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              Contact Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid">
          <div className="sm:text-center text-4xl font-bold">
            <p> Anand Phadnis  </p>
            <p>Technical Lead </p>
            <p> +91 7600785824</p>
            <p>phadnisanandhyd@gmail.com</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}
export default Contact