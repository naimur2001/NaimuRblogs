import React from 'react'

const ConncetForm = () => {
  return (
    <div className=' my-10 lg:px-0 px-2'>
       <form action="" method="POST" className="w-full max-w-lg ">
                {/* modal */}
 



  {/* modal */}
              <div className="flex flex-wrap  -mx-3 mb-6 lg:px-0 px-2">
                <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-2 border-sky-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-2 border-sky-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-last-name"
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
              <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-2 border-sky-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-2 border-sky-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none block w-full text-gray-700 border-2 border-sky-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    rows={5}
                    id="grid-password"
                    type="text"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className={`w-full px-6 md:px-8 lg:px-8 py-2 md:py-3 lg:py-3 bg-sky-200 rounded font-semibold text-gray-700 outline outline-1 capitalize transition ease duration-300 hover:translate-x-1 hover:-translate-y-1 outline-none `}

              >
                Send
              </button>

                      
            </form>
    </div>
  )
}

export default ConncetForm