import images from '../../images/404.png'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import './PageNotFound.css'

export const PageNotFound = () => {
  return (

    <div className='backs'>
      <Nav />
      {/* <Sidebar /> */}
      <div className='wrappers'>
      <img className='pageNotFound' src={images} />
    </div>
    </div >
  )
}
