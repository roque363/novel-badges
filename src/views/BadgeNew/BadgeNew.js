import React, { useState, useEffect } from 'react';
import './badgeNew.scss';
// Components
import BadgeHero from 'components/BadgeHero';
import { BadgeForm, Badge } from './components';
// Hooks
import { useInputValue } from 'hooks/useInputValue';
// Images
import nino_profile from 'assets/nino_profile.jpg';
import nino from 'assets/nino.jpg';

function BadgeNew(props) {
  const [error, setError] = useState('');

  const firstName = useInputValue('');
  const lastName = useInputValue('');
  const mangaTitle = useInputValue('');
  const avatarImage = useInputValue('');
  const badgeImage = useInputValue('');

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
    <div className="badge-new">
      <BadgeHero title="New Waifu" />
      <div className="container badge-new__container">
        <div className="row">
          <div className="col-md-6">
            <Badge
              firstName={firstName.value || 'Nino'}
              lastName={lastName.value || 'Nakano'}
              badgeImage={badgeImage.value || nino}
              avatarImage={avatarImage.value || nino_profile}
              mangaTitle={mangaTitle.value || '5Toubun no Hanayome'}
            />
          </div>
          <div className="col-md-6">
            <BadgeForm
              firstName={firstName}
              lastName={lastName}
              badgeImage={badgeImage}
              avatarImage={avatarImage}
              mangaTitle={mangaTitle}
              onSubmit={handleSubmit}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeNew;
