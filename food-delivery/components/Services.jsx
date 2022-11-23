import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services() {
  return(
    <>
    <div className={css.heading}>
      <span>What we serve</span>
      <span>Your favorite food</span>
      <span>Delivery Partners</span>
    </div>

    <div className={css.services}>
      <div className={css.feature}>
        <div className={css.ImageWrapper}>
          <Image src={s1} alt= "" objectFit='cover' layout='intrinsic'/>
        </div>
        <span>ashdfskjahfl</span>
        <span>loredsfsafdsf</span>
      </div>

      <div className={css.feature}>
        <div className={css.ImageWrapper}>
          <Image src={s2} alt= "" objectFit='cover' layout='intrinsic'/>
        </div>
        <span>ashdfskjahfl</span>
        <span>loredsfsafdsf</span>
      </div>

      <div className={css.feature}>
        <div className={css.ImageWrapper}>
          <Image src={s3} alt= "" objectFit='cover' layout='intrinsic'/>
        </div>
        <span>ashdfskjahfl</span>
        <span>loredsfsafdsf</span>
      </div>
    </div>
    </>
  )
};
