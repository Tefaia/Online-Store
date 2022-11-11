import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { b2discount, b2largeText1, b2largeText2, b2saleTime, b2smallText, b2midText, b2desc, b2product, b2buttonText, image2 } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc banner-2">
        <div className="left">
          <p>{b2discount}</p>
          <h3>{b2largeText1}</h3>
          <h3>{b2largeText2}</h3>
          <p>{b2saleTime}</p>
        </div>
        <div className="right">
          <p>{b2smallText}</p>
          <h3>{b2midText}</h3>
          <p className="des">{b2desc}</p>
          <Link href={`/product/${b2product}`}>
            <button type="button">{b2buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(image2)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner