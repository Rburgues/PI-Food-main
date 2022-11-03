import image404 from '../../images/PageNotFound404.png'
import Nav from '../NavVacia/NavVacia'
import './PageNotFound.css'

export const PageNotFound = () => {
  return (

    <div className='backs'>
      <Nav />
      {/* <Sidebar /> */}
      <div className='wrappers'>
      <img className='pageNotFound' src={image404} />
    </div>
    </div >
  )
}
