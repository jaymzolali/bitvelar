import Footer from '../footer/Footer';
const page = () => {
  return (
    <div className='mt-20'>
      <div className="mx-3">
        <div className="">
          <h1 className="text-center font-bold text-2xl">Transactions History</h1>
        </div>
        <div className='bg-white border mt-3 rounded-2xl p-4 mb-[20rem]'>
          <h1 className='text-center font-bold text-sm'>No Transactions</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page