import Footer from '../components/global/Footer'
import Navbar from '../components/global/navbar'
import '../styles/globals.scss'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className="mainroot">
      {/* using as Layout Coponent */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
