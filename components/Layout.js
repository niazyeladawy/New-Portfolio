
import Navbar from '@/components/navbar/Navbar'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    )
}

export default Layout
