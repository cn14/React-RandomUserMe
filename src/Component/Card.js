import React from 'react';
import './Card.css';
const Card = ({ user }) => {
	return (
		<div className="col s12 m7 container">
			<div className="card horizontal">
				<div className="card-image">
					<img src={user.picture.large} className="img" alt="ab" />
				</div>
				<div className="card-stacked">
					<div className="card-content">
						<h4>
							{`${user.name.title}. ${user.name.first} ${user.name.last}`}
						</h4>
						<h5>Email: {user.email}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
