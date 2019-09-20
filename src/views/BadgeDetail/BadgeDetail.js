import React, { Component } from 'react';
import './badgeDetail.scss';

import BadgeHero from '../../components/BadgeHero/BadgeHero';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

class BadgeDetail extends Component {
  state = {
    loading: true,
    error: null,
    modalIsOpen: false,
    data: undefined
  }
  _isMounted = true;

  componentDidMount() {
    const { badgeData } = this.props.location.state;
    // console.log( badgeData );
    this.fetchData(badgeData);
  }

  fetchData = async (badgeData) => {
    this.setState({ loading: true, error: null });
    try {
      // console.log( this.props.match.params.badgeId )
      this.setState({ loading: false, data: badgeData });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (this.state.loading) {
      return <Loader/>
    }
    if (this.state.error) {
      return <h3>{this.state.error}</h3>
    }
    return (
      <React.Fragment>
        <BadgeHero title={this.state.data.title}/>
        <div className="container">
          <p>Id: {this.props.match.params.badgeId}</p>
          <p>Autor: {this.state.data.author}</p>
          <button onClick={this.handleOpenModal} className="btn btn-primary">Ver</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onClose={this.handleCloseModal} >
            Menaje de Test
          </Modal>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeDetail
