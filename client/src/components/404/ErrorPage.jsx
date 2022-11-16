import image from '../../images/404.png'
import s from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={s.content404}>
        
        <img className={s.image404} src={image} />

    </div>
  )
}
