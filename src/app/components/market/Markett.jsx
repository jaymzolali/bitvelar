
import './market.css'



const Markett = () => {
  return (
    <>
    <div className='mx-3 px-3 border rounded-xl my-3 py-3'>
        <h4 className="bg-[#420c8e] px-4 w-[6rem] text-white mb-3 py-1 rounded-2xl">Market</h4>
        <div className="buy-sell">
            <div className="green-buy">
                <div className="green-name">
                    <span>USDT</span>
                    <span>0.0000000USDT</span>
                </div>
                <div className="border rounded-2xl my-2 flex py-2 px-2"><div><input type="number" placeholder="Amount" className='buy-input'  /></div><div>BTC</div> </div> <hr/>
                <div className="border rounded-2xl p-2 my-2">
                    <small>Total</small> <span>0.00000 USDT</span>
                </div>
                <div className="green-btn bg-green-300 rounded-2xl text-center py-2 text-white mt-3">Buy</div>
            </div>
            <div className="red-sell">
            <div className="green-name">
                    <span>USDT</span>
                    <span>0.0000000USDT</span>
                </div>
                <div className="border rounded-2xl my-2 flex py-2 px-2"><div><input type="number" placeholder="Amount" className="sell-input"  /></div><div>BTC</div> </div> <hr/>
                <div className="border rounded-2xl p-2 my-2">
                    <small>Total</small> <span>0.00000 USDT</span>
                </div>
                <div className="green-btn bg-[red] rounded-2xl text-center py-2 text-white mt-3">Sell</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Markett;