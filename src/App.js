import React from 'react';

import BottomNav from './components/BottomNav';
import Button from './components/Button';
import Card from './components/Card';
import Slider from './components/Slider';

import PostPage from './components/posts/PostPage';

function App() {
	return (
		<div className="App">
			<Slider />
			<BottomNav />
			<Button />
			<Card />
			<PostPage />
		</div>
	);
}

export default App;
