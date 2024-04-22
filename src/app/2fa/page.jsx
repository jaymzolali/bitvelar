import Footer from '../footer/Footer'
const page = () => {
  return (
    <div className='mt-20'>
      <div className="border rounded-2xl bg-slate-50 mx-3 my-3 px-3">
        <div className="border-b py-3">
          <h1 className='font-bold text-2xl'>2FA <span className='text-[red] text-2xl font-bold'>Disabled</span></h1>
          <p>If you want to enable 2FA, enter the six digit code provided by the Google Authentication app below, then click Enable 2FA.</p>
        </div>
        <div className="pt-3">
        <h1 className='font-bold text-2xl'>Enable 2FA</h1>
          <p>Scan the SQ code with the Google Authenticator app and enter the six digit 2FA code to enable 2FA verification.</p>
        </div>
        <div className="mt-4">
          <label htmlFor="text" className="text-gray-900 font-medium ">AUTHENTICATOR CODE</label>
            <input type="text" id="text" name="text" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
          <button className='bg-[#420c8e] w-full mt-4 border-2 mb-4  rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Enable 2FA</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default page
