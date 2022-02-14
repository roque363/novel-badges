import { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';

import { useInputValue } from 'hooks/useInputValue';
import { BadgeHero } from 'components';
import { BadgeForm, Badge } from './components';
import nino_profile from 'assets/nino_profile.jpg';
import nino from 'assets/nino.jpg';
import styles from './badgeNew.module.scss';

function BadgeNew(props) {
  const [error, setError] = useState('');
  const firstName = useInputValue('Nino');
  const lastName = useInputValue('Nakano');
  const mangaTitle = useInputValue('5Toubun no Hanayome');
  const avatarImage = useInputValue(nino);
  const badgeImage = useInputValue(nino_profile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // props.history.push('/badges');
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BadgeHero title="New Waifu" />
      <Container maxWidth="lg" className={styles.root}>
        <Paper elevation={0} className={styles.card}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={styles.alt}>
                <Badge
                  firstName={firstName.value}
                  lastName={lastName.value}
                  badgeImage={badgeImage.value}
                  avatarImage={avatarImage.value}
                  mangaTitle={mangaTitle.value}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <BadgeForm
                firstName={firstName}
                lastName={lastName}
                badgeImage={badgeImage}
                avatarImage={avatarImage}
                mangaTitle={mangaTitle}
                onSubmit={handleSubmit}
                error={error}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default BadgeNew;
