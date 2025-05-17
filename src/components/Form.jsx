import React from 'react'

function Form() {
  return (
    <form name='contact' method='POST' data-netlify='true' >
        <input type="hidden" name="form-name" value='contact' />

        <div className='mb-4 '>
            <label htmlFor="name" className='mb-2 inline-block font-semibold'>Name</label>
            <input className='h-[45px] w-full rounded-sm bg-slate-900 pl-4' type="text" id='name' name='name' required />
        </div>

        <div className='mb-4 '>
            <label htmlFor="email" className='mb-2 inline-block font-semibold'>Email</label>
            <input className='h-[45px] w-full rounded-sm bg-slate-900 pl-4' type="email" id='email' name='email' required />
        </div>

        <div className='mb-4'>
            <label htmlFor="message" className='mb-2 inline-block font-semibold'>Message</label>
            <textarea className='h-[150px] w-full rounded-sm bg-slate-900 pl-4 pt-2' cols={30} rows={10} id='message' name='message' required></textarea>
        </div>


        <button className='px-6 cursor-pointer py-3 inline-block captilize font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md'>Send Message</button>
    </form>
  )
}

export default Form