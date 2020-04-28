import React from 'react';
import PropTypes from 'prop-types'

const BadgeForm = props => {
  const { firstName, lastName, badgeImage, avatarImage, mangaTitle, onSubmit, error } = props

  return (
    <div>
      <h1>Nueva Waifu</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={firstName.onChange}
            value={firstName.value}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Apellido</label>
          <input
            onChange={lastName.onChange}
            className="form-control"
            type="text"
            name="last_name"
            value={lastName.value}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Manga Title</label>
          <input
            onChange={mangaTitle.onChange}
            className="form-control"
            type="text"
            name="mangaTitle"
            value={mangaTitle.value}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Banner Image</label>
          <input
            onChange={badgeImage.onChange}
            className="form-control"
            type="text"
            name="badgeImage"
            value={badgeImage.value}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Profile Image</label>
          <input
            onChange={avatarImage.onChange}
            className="form-control"
            type="text"
            name="avatarImage"
            value={avatarImage.value}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        {error && (
          <p className="text-danger">Error en el Formulario</p>
        )}
      </form>
    </div>
  )
}

BadgeForm.propTypes = {
  firstName: PropTypes.object,
  lastName: PropTypes.object,
  badgeImage: PropTypes.object,
  avatarImage: PropTypes.object,
  mangaTitle: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default BadgeForm;