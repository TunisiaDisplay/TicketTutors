import Image from 'next/image';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



import img2 from '../../public/img/img2.png'
import progress2 from '../../public/img/progress2.png'

export default function Find() {



    return (
        <>
            <div className="part-1 white">
                <Image src={img2} alt="" />
                <div className="progress">
                    <Image src={progress2} alt="" />
                </div>
            </div>
            <div className="part-2 white">
                <div className='part-2'>
                    <h2>Payment info</h2>
                    <span>Cardholder name</span>
                    <TextField
                        id="card-name"
                        className='form-el'
                        placeholder="Enter your name as it's written on the card"
                    />

                    <span>Card number</span>
                    <TextField
                        id="card-number"
                        className='form-el'
                        placeholder="1234 1234 1234 1234"
                    />
                </div>

                <Button id="next-b" variant="contained" size='medium'>Next</Button>

            </div>

        </>

    )
}
