import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import axios from 'axios';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				'https://randomuser.me/api/?results=10'
			);
			setUsers(res.data.results);
		};
		fetchData();
	}, []);
	console.log(users);
	return (
		<div>
			<Navbar />
			{users.map((user) => (
				<Card key={user?.id.value} user={user} />
			))}
		</div>
	);
}

export default App;
