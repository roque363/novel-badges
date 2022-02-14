import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

import styles from './badgeForm.module.scss';

const Field = (props) => (
  <div className={styles.group}>
    <label className={styles.label} htmlFor={props.name}>
      {props.title}
    </label>
    <TextField
      variant="outlined"
      size="small"
      type="text"
      disabled={props.disabled}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);

const BadgeForm = (props) => {
  const {
    firstName,
    lastName,
    badgeImage,
    avatarImage,
    mangaTitle,
    onSubmit,
    error,
  } = props;

  return (
    <div>
      <h1 className={styles.title}>Nueva Waifu</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <Field
          title="Nombre:"
          name="name"
          value={firstName.value}
          onChange={firstName.onChange}
        />
        <Field
          title="Apellido:"
          name="last_name"
          value={lastName.value}
          onChange={lastName.onChange}
        />
        <Field
          title="Manga Title:"
          name="manga_title"
          value={mangaTitle.value}
          onChange={mangaTitle.onChange}
        />
        <Field
          disabled
          title="Banner:"
          name="badge_image"
          value={badgeImage.value}
          onChange={badgeImage.onChange}
        />
        <Field
          disabled
          title="Avatar:"
          name="avatar_image"
          value={avatarImage.value}
          onChange={avatarImage.onChange}
        />
        <div className={styles.actions}>
          <Button
            className={styles.btn}
            variant="contained"
            color="primary"
            type="submit">
            Guardar
          </Button>
        </div>
        {error && <p className="text-danger">Error en el Formulario</p>}
      </form>
    </div>
  );
};

BadgeForm.propTypes = {
  firstName: PropTypes.object,
  lastName: PropTypes.object,
  badgeImage: PropTypes.object,
  avatarImage: PropTypes.object,
  mangaTitle: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default BadgeForm;
