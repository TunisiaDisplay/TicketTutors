import { useState } from 'react';
import Image from 'next/image';

import dayjs from 'dayjs';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import img1 from '../../public/img/img1.svg'
import progress from '../../public/img/progress.png'

export default function Payment() {

    const [country, setCountry] = useState('');
    const [expiryDate, setExpiryDate] = useState(dayjs('2022-04-07'));


    const handleChange = (event) => {
        setCountry(event.target.value);
    };



    return (
        <>
            <div className="part-1 white">
                <Image src={img1} alt="" />
                <div className="progress">
                    <Image src={progress} alt="" />
                </div>
            </div>
            <div className="part-2 white">
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

                <div className="part-3">
                    <div className='form-part'>
                    <span>Expiry date</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={expiryDate}
                                onChange={(newValue) => {
                                    setExpiryDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className='form-part'>
                    <span>Security code</span>
                        <TextField
                            id="sec-code"
                            className='form-el'
                            placeholder="CVC"
                        />
                    </div>

                    <div className='form-part'>
                    <span>Postal code</span>
                        <TextField
                            id="postal-code"
                            className='form-el'
                            placeholder="Enter postal code"
                        />
                    </div>
                    <div className='form-part'>
                    <span>Country</span>

                        <Select
                            value={country}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Select country</em>
                            </MenuItem>
                            <MenuItem value={10}>Tunisia</MenuItem>
                            <MenuItem value={20}>U.S.A</MenuItem>
                            <MenuItem value={30}>Canada</MenuItem>
                        </Select>

                    </div>
                </div>

                <Button id="next-b" variant="contained">Next</Button>

            </div>

        </>

    )
}
