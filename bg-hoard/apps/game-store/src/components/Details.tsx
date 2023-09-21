import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../styles/Detail.module.css'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { formatRating } from '../utils/formatter';
import { Game } from '../interfaces/game-interface';

export const StoreFeatureGameDetail = () => {
    let { id } = useParams();

    const [state, setState] = useState<{
        data: Partial<Game>;
        loadingState: 'success' | 'error' | 'loading';
    }>({
        data: {},
        loadingState: 'success',
    });

    useEffect(() => {
        setState({
            ...state,
            loadingState: 'loading',
        });
        const gameId = id;
        fetch((process.env.NX_API_URL ?? '') + `/api/games/${gameId}`)
            .then((x) => x.json())
            .then((res) => {
                setState({
                    ...state,
                    data: res,
                    loadingState: 'success',
                });
            })
            .catch((err) => {
                setState({
                    ...state,
                    loadingState: 'error',
                });
            });
    }, [id]);

    return (
        <div className={styles['container']}>
            {state.loadingState === 'loading' ? (
                'Loading...'
            ) : state.loadingState === 'error' ? (
                <div>Error fetching data</div>
            ) : state.data == null ? (
                ''
            ) : (
                <Card>
                    <CardHeader title={state.data.name}></CardHeader>
                    {state.data.image ? (
                        <CardMedia
                            className={styles['game-card-media']}
                            image={state.data.image}
                            title={state.data.name}
                        />
                    ) : null}
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {state.data.description}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={styles['game-rating']}
                        >
                            <strong>Rating:</strong> {formatRating(state.data.rating)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Buy
                        </Button>
                        <Button variant="contained">Share</Button>
                    </CardActions>
                </Card>
            )}
        </div>
    );
};

export default StoreFeatureGameDetail;