import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from './styles'

const NewsCard = ({ article: { description, url, urlToImage, publishedAt, source, title, author }, i }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2" >{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom component="h5" className={classes.title}>{title}
                </Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography color="textSecondary" component="h5">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard