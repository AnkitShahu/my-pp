import React from 'react'
import { Card } from 'flowbite-react';
import javascript from '../public/javascript.png'

function Technology() {
  return (
    <>
    <div className='flex justify-center font-semibold text-5xl my-9' >Technology</div>
    <div className='flex flex-wrap w-full flex-grow justify-evenly'>
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={javascript}
          width="96"
          className="mb-3 rounded-full shadow-lg object-cover"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Python</h5>
      </div>
    </Card>
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={javascript}
          width="96"
          className="mb-3 rounded-full shadow-lg object-cover"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">JavaScript</h5>
      </div>
    </Card>
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={javascript}
          width="96"
          className="mb-3 rounded-full shadow-lg object-cover"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">PHP</h5>
      </div>
    </Card>
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={javascript}
          width="96"
          className="mb-3 rounded-full shadow-lg object-cover"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Django</h5>
      </div>
    </Card>

    </div>


    </>
  )
}

export default Technology