import Footer from '../footer/Footer'
import './risk.css'


const page = () => {
  return (
    <div>
    <div className='rissk mt-20 mx-3 px-3'>
      <h1 className='text-center font-bold text-2xl pt-3'>Risk Warning</h1>
      <ul>
        <li className='mb-3 text-[gray]'>The trading of goods and products, real or virtual, as well as virtual currencies involves significant risk. Prices can and do fluctuate on any given day. Due to such price fluctuations, you may increase or lose value in your assets at any given moment. Any currency - virtual or not - may be subject to large swings in value and may even become worthless. There is an inherent risk that losses will occur as a result of buying, selling or trading anything on a market.</li>
      </ul>
      <ul>
        <li className='mb-3 text-[gray]'>Bitcoin trading also has special risks not generally shared with official currencies or goods or commodities in a market. Unlike most currencies, which are backed by governments or other legal entities, or by commodities such as gold or silver, Bitcoin is a unique kind of "fiat" currency, backed by technology and trust. There is no central bank that can take corrective measure to protect the value of Bitcoins in a crisis or issue more currency.</li>
      </ul>
      <ul>
        <li className='mb-3 text-[gray]'>Instead, Bitcoin is an as-yet autonomous and largely unregulated worldwide system of currency firms and individuals. Traders put their trust in a digital, decentralized and partially anonymous system that relies on peer-to-peer networking and cryptography to maintain its integrity.</li>
      </ul>
      <ul>
        <li className='mb-3 text-[gray]'>Bitcoin trading is probably susceptible to irrational (or rational) bubbles or loss of confidence, which could collapse demand relative to supply. For example, confidence might collapse in Bitcoin because of unexpected changes imposed by the software developers or others, a government crackdown, the creation of superior competing alternative currencies, or a deflationary or inflationary spiral. Confidence might also collapse because of technical problems: if the anonymity of the system is compromised, if money is lost or stolen, or if hackers or governments are able to prevent any transactions from settling.</li>
      </ul>
      <ul>
        <li className='mb-3 text-[gray]'>There may be additional risks that we have not foreseen or identified in our Terms of Use.</li>
      </ul>
      <ul>
        <li className='mb-3 text-[gray]'>You should carefully assess whether your financial situation and tolerance for risk is suitable for buying, selling or trading Bitcoins.</li>
      </ul>
      <div className="risk-img"></div>
    </div>
    <Footer />
    </div>
  )
}

export default page