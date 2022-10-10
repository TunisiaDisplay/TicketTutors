import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';

import img2 from '../../public/img/img3.png';
import TutorDescription from '../../components/TutorDescription';
import { PropaneSharp } from '@mui/icons-material';

export default function Job(props) {



    return (
        <>
            <div className="part-1 white">
                <Image src={img2} alt="" />
            </div>
            <div className="part-2 white space_between">
                <TutorDescription />
                <div>
                    <TextField
                        defaultValue={props.tutorLink || "https://meet.google.com/abc"}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                   <LinkIcon color="primary" size="small" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <Button id="next-b" variant="contained" size='medium'>Next</Button>

            </div>

        </>

    )
}
