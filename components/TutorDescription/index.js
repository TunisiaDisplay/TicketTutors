import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


import Style from "./TutorDescription.module.css";

const TutorDescription = () => {
    return (
        <Card className={Style.main}>
            <CardMedia
                className={Style.part_1}
                component="img"
                image="/img/tutor.png"
                alt="green iguana"
            />
            <CardContent className={Style.tutorPersInfo}>
                <div >
                    <Typography gutterBottom variant="h5" component="div">
                        Salman Alfarizi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        mathematics
                    </Typography>
                </div>
                <div>
                    <Rating className={Style.nbReviews} name="read-only" value={4} readOnly />
                    <p className={Style.nbReviews}>1238 reviews</p>
                </div>

            </CardContent>

        </Card>
    )
}

export default TutorDescription;