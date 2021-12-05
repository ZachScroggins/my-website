import ExitPreview from 'components/ExitPreview'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ExitPreview />
    </>
  )
}

export default Layout
