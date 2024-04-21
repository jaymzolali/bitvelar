import Footer from '../footer/Footer'

const page = () => {
  return (
    <div className='mt-20'>
      <div className="mx-3 mb-4 px-3 bg-white rounded-2xl">
        <div className="">
          <h1 className="font-bold border-b pb-2 text-2xl">Personal Details</h1>
        </div>
        <div className='mx-3'>
          <h1>First name <span className='text-[red]'>*</span></h1>
          <input type="text" id="text" name="text" placeholder="First name" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
        </div>
        <div className='mx-3'>
          <h1>Last name <span className='text-[red]'>*</span></h1>
          <input type="text" id="text" name="text" placeholder="Last name" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
        </div>
        <div className='mx-3'>
          <h1>Middle name <span className='text-[red]'>*</span></h1>
          <input type="text" id="text" name="text" placeholder="Middle name" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
        </div>
        <div className='mx-3'>
          <h1>Gender <span className='text-[red]'>*</span></h1>
          <input type="text" id="text" name="text" placeholder="First name" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
        </div>
        <div className='mx-3'>
          <h1>Phone number <span className='text-[red]'>*</span></h1>
          <input type="number" id="text" name="text" placeholder="phone number" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
          <button className='bg-[#420c8e] w-full my-4 border-2  rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Save changes</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page