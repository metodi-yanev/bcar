import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';
import bg_panel_1_lg from '../assets/bg_panel_1--lg.jpg';
import bg_panel_1_xxs from '../assets/bg_panel_1--xxs.jpg';
import fb, {db} from '../fb';

const StyledPImg = styled(ProgressiveImage)`
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: transform .2s ease-out;
    transform: scale(1.03);
  &:before {
	background: linear-gradient(rgba(51,52,51,0.9), rgba(51,52,51,0.9));
	content: "";
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

class Home extends Component {
    constructor() {
      super();
      this.state = {
        data: {},
        isLoading: true,
        error: null,
      };
    }	

	componentDidMount() {

	    let groupsRef = db.collection("machines").doc("groups");

		groupsRef.get().then(doc => this.setState({data: doc.data(), isLoading: false}))
        .catch(error => this.setState({error, isLoading: false}));

  	}

	render() {
		return (
			<div className="wrap">
				<section className="container-fluid">
					<div className="row">
						<div className="col-md-6 s-bg-img py-5 pl-5">
							<StyledPImg
							  src={bg_panel_1_lg}
							  opacity={1}
							  placeholder={bg_panel_1_xxs}
							  blur={3}
							  transition=".3s filter"
							  scale={1.03}
							/>
							<ul className="list-unstyled">
							  <p className="h2">{this.state.data.groupName}</p>
							  {this.state.isLoading ? '' : this.state.data.types.map((type, index) => <li key={index}><Link className="h5" to="/production">{type}</Link></li>)}

							</ul>
						</div>
						<div className="col-md-6 s2-wrap py-5 pl-5">
							<ul className="list-unstyled">
							  <li className="h2">Тельферы</li>
							  <li>Consectetur adipiscing elit</li>
							  <li>Integer molestie lorem at massa</li>
							  <li>Facilisis in pretium nisl aliquet</li>
							  <li>Faucibus porta lacus fringilla vel</li>
							  <li>Aenean sit amet erat nunc</li>
							  <li>Eget porttitor lorem</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 s3-wrap py-5 pl-5">
							<ul className="list-unstyled">
							  <li className="h2">Тяговые аккумуляторные батареи</li>
							  <li>Consectetur adipiscing elit</li>
							  <li>Integer molestie lorem at massa</li>
							  <li>Facilisis in pretium nisl aliquet</li>
							  <li>Faucibus porta lacus fringilla vel</li>
							  <li>Aenean sit amet erat nunc</li>
							  <li>Eget porttitor lorem</li>
							</ul>
						</div>
						<div className="col-md-6 s4-wrap py-5 pl-5">
							<ul className="list-unstyled">
							  <li className="h2">Электродвигатели</li>
							  <li>Consectetur adipiscing elit</li>
							  <li>Integer molestie lorem at massa</li>
							  <li>Facilisis in pretium nisl aliquet</li>
							  <li>Faucibus porta lacus fringilla vel</li>
							  <li>Aenean sit amet erat nunc</li>
							  <li>Eget porttitor lorem</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 s5-wrap py-5 pl-5">
							<ul className="list-unstyled">
							  <li className="h2">Зарядные устройства</li>
							  <li>Consectetur adipiscing elit</li>
							  <li>Integer molestie lorem at massa</li>
							  <li>Facilisis in pretium nisl aliquet</li>
							  <li>Faucibus porta lacus fringilla vel</li>
							  <li>Aenean sit amet erat nunc</li>
							  <li>Eget porttitor lorem</li>
							</ul>
						</div>
						<div className="col-md-6 s6-wrap py-5 pl-5">
							<ul className="list-unstyled">
							  <li className="h2">Запасные части</li>
							  <li>Consectetur adipiscing elit</li>
							  <li>Integer molestie lorem at massa</li>
							  <li>Facilisis in pretium nisl aliquet</li>
							  <li>Faucibus porta lacus fringilla vel</li>
							  <li>Aenean sit amet erat nunc</li>
							  <li>Eget porttitor lorem</li>
							</ul>
						</div>
					</div>					
				</section>
			</div>
		);
	}
}

export default Home;