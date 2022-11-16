import image404 from '../../images/PageNotFound404.png'
import Nav from '../NavVacia/NavVacia'
import s from './PageNotFound.module.css'

export const PageNotFound = () => {
  return (

    <div className={s.backs}>
      <Nav />
     
      <div className={s.wrappers}>
      <img className={s.pageNotFound} src={image404} />
    </div>
    </div >
  )
}
