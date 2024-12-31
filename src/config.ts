/**
 * 
 * Site Configuration
 * 
 */


/**
 * Site Info
 */

export const SITE_FULL_NAME = 'Megan Riley>'

export const SITE_SHORT_NAME = 'Megan Riley'

export const LOGO_NAME = SITE_SHORT_NAME

export const PHONE_NUMBER = ''

export const EMAIL_ADDRESS = ''

export const LOCATION = ''

export const HEADER_LOGO_PATH = './img/logo.svg'

export const HERO_IMG_PATH = './img/hero.webp'

export const FAVICON_PATH = './meta-img/favicon.svg'


/**
 * Navigation Links
 */

export interface Navlink {
    title     : string,
    path      : string,
    mainNav   : boolean,
    footerNav : boolean,
    cta       : boolean
}

/** Note: There can only be 1 Call to Action link */
export const NAV_LINKS : Navlink[] = [
    {
        title     : 'Home',
        path      : '/',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
]

export interface Contactlink {
    title : string,
    icon? : string,
    path?  : string
}

export const CONTACT_LINKS: Contactlink[] = [
    {
        title : PHONE_NUMBER,
        icon  : 'phone_iphone',
        path  : 'tel:' + PHONE_NUMBER
    },
    {
        title : EMAIL_ADDRESS,
        icon  : 'email',
        path  : 'mailto:' + EMAIL_ADDRESS
    },
    {
        title : LOCATION,
        icon  : 'place',
    },
]

