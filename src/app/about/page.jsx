import './about.css'
import Footer from '../footer/Footer'





const page = () => {
    return (
        <div>
            <h1 className='mt-20 text-center font-bold text-2xl mb-3'>About us</h1>
            <div className='about_1 mx-3 my5'>
                <div className='about_1-para px-3'>
                    <h1 className=' font-bold text-2xl pt-3 my-3'>About company</h1>
                    <p className=''>Our company begins its history from June 2018, when it was developed. Recognizing the importance of Bitcoin from the onset, and understanding that the exchange is the most critical part of the cryptocurrency ecosystem, it is governed by a board of directors and this makes it safe. Since then, the company has grown by leaps and bounds with hundreds of employees spanning the globe. We’re a diverse group of thinkers and doers that are dedicated to making cryptocurrency available and accessible to the world and enabling people from all walks of life to invest in their independence. We believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.</p>
                </div>
                <div className='about_1-img'></div>
            </div>
            <div className='about_2 mx-3 my5'>
                <div className='about_1-para px-3'>
                    <h1 className=' font-bold text-2xl pt-3 my-3'>What we do</h1>
                    <div className="abt-star flex gap-2">
                        <div className="star-img"></div>
                        <h1 className=' font-bold text-2xl mb-3'>Supporting institutions</h1>
                    </div>
                    <p className='mb-3'>From over-the-counter trading to personalized white-glove account management, bitvevo is the premier cryptocurrency investing solution for institutions of all sizes. We offer exceptional liquidity and competitive pricing for all our markets so you can achieve your investment goals quickly and confidently.</p>
                    <div className="abt-star flex gap-2">
                        <div className="star-img"></div>
                        <h1 className=' font-bold text-2xl mb-3'> Empowering investors</h1>
                    </div>
                    <p className='mb-3'>Whether you’re an advanced trader or a crypto-beginner, bitvevo gives you the power to chart your own financial course. Our exchange has an ever-growing number of cryptocurrency pairs for you to invest in and a slew of tools and features for you to leverage as you grow your portfolio.</p>
                </div>
            </div>
            <div className='about_3 mx-3 my5'>
                <div className='about_1-para px-3'>
                    <h1 className=' font-bold text-2xl pt-3 my-3'>Roadmpa</h1>
                </div>
            </div>
            <div className='about_4 mx-3 my5'>
                <div className='about_1-para px-3'>
                    <h1 className=' font-bold text-2xl pt-3 my-3'>1 Gafton   Street</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.207303376754!2d-0.14593422428855815!3d51.50941267181374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605298661c0eb%3A0xd4961a9fe0c684ae!2s1%20Grafton%20St%2C%20London%20W1S%204FE%2C%20UK!5e0!3m2!1sen!2sng!4v1709830904368!5m2!1sen!2sng" 
                    width="359" 
                    height="200" 
                    style={{border: "0"}} 
                    allowfullscreen="" 
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default page

