import React from 'react';

class BadgeForm extends React.Component {
  //state = {};

  //handleChange = e => {
  //  console.log({ name: e.target.name, values: e.target.value })
  //  this.setState({
  //    [e.target.name]: e.target.value
  // })
  //}

  handleClick = e => {
    console.log( "Button Save was clicked" )
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log( "Form was submited" )
    console.log( this.state )
  }

  render() {
    return(
      <div>
        <h1>New Waifu</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.props.formValues.firstName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input 
              onChange={this.props.onChange}
              className="form-control" 
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Manga Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="mangaTitle"
              value={this.props.formValues.mangaTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Banner Image</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="badgeImage"
              value={this.props.formValues.badgeImage}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Profile Image</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="avatarImage"
              value={this.props.formValues.avatarImage}/>
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;