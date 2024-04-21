import './profile.css';
import Footer from '../footer/Footer';
const page = () => {
  return (
    <div className='mt-20'>
      <div className='mx-3 border rounded-2xl bg-white p-4 mb-4'>
        <h1 className='text-2xl font-bold border-b pb-2'>Profile info</h1>
        <div className=''>
          <h1 className='font-bold'>John</h1>
          <p>john.doe@gmail.com</p>
          <h2 className='font-bold'>Change Name</h2>
          <p>New Name</p>
          <input type="text" placeholder='John' className='border rounded-2xl p-1 pl-2'/> <br/>
          <button className='bg-purple-900 text-white text-center rounded-2xl px-[5rem] py-2 mt-3'>Save</button>
        </div>
        <div className="">
          <h1 className="font-bold mt-2">Change password</h1>
          <p>Current password</p>
          <input type="password" placeholder='********' className='border rounded-2xl p-1 pl-2' /> <br/>
          <p>New password</p>
          <input type="password" placeholder='********' className='border rounded-2xl p-1 pl-2' /> <br/>
          <p>Confirm password</p>
          <input type="password" placeholder='********' className='border rounded-2xl p-1 pl-2' /> <br/>
        </div>
        <button className='bg-purple-900 text-white text-center rounded-2xl px-[5rem] py-2 mt-3'>Save password</button>
      </div>
      <Footer />
    </div>
  )
}

export default page