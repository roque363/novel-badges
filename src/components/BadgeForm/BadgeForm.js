import React from 'react';

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      values: e.target.value
    })
  }

  handleClick = e => {
    console.log( "Button was clicked" )
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log( "Form was submited" )
  }

  render() {
    return(
      <div>
        <h1>New Attendan</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;