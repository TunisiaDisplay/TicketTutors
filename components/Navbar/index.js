import Image from 'next/image';
import Link from 'next/link';

import IconButton from '@mui/material/IconButton';

import Logo from '../../public/img/Logo.png'
import SMS from '../../public/img/sms.png'
import Notif from '../../public/img/notification-bing.png'


const Navbar = () => {
    return (
        <div className="header white">
            <div className='logo'>
                <Link href="/">
                    <Image alt='Tunisia Display' src={Logo} />
                </Link>
            </div>
            <div>
                <IconButton>
                    <Image alt='Tunisia Display' src={SMS} />
                </IconButton>

                <IconButton>
                    <Image alt='Tunisia Display' src={Notif} />
                </IconButton>

            </div>
        </div>

    )
}

export default Navbar;