import { useEffect, useState } from 'react';
import styles from './app.module.scss';

import { Game } from '../interfaces/game-interface';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { formatRating } from '../utils/formatter';

import { Route, Routes, Link } from 'react-router-dom';
import { StoreFeatureGameDetail } from '../components/Details';
import { getAllGamesPromise } from '../fake-api/get-games';

import { Header } from '@bg-hoard/ui-shared';

export const App = () => {
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      loadingState: 'loading',
    }));
    getAllGamesPromise()
      .then((res) => {
        setState((state) => ({
          ...state,
          data: res,
          loadingState: 'success',
        }));
      })
      .catch((err) => {
        setState((state) => ({
          ...state,
          loadingState: 'error',
        }));
      });
  }, []);


  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles['games-layout']}>
          {state.loadingState === 'loading'
            ? 'Loading...'
            : state.loadingState === 'error'
              ? <div>Error retrieving data</div>
              : state.data.map((x) => (
                <Card className={styles['game-card']} component={Link} to={`/game/${x.id}`} key={x.id}>
                  <CardActionArea>
                    <CardMedia
                      className={styles['game-card-media']}
                      image={x.image}
                      title={x.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {x.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={styles['game-rating']}
                      >
                        <strong>Rating:</strong> {formatRating(x.rating)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
        </div>
        <Routes>
          <Route path="/game/:id" element={<StoreFeatureGameDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;