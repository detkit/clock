import { useState, useEffect } from 'react'
import Player from './components/Player'

function App() {
	const [songs] = useState([
		{
			title: 'Bang Bang',
			artist: 'Rita Ora ft. Imanbek',
			img_src: 'images/song-1.jpg',
			src: 'music/Bang Bang - Rita Ora.mp3',
		},
		{
			title: 'BlackJack',
			artist: 'Soobin ft. Binz',
			img_src: 'images/song-2.jpg',
			src: 'music/BlackJack - Soobin, Binz.mp3',
		},
		{
			title: 'Higher',
			artist: 'Eminem',
			img_src: 'images/song-3.jpg',
			src: 'music/Higher - Eminem.mp3',
		},
		{
			title: 'Cool',
			artist: 'Dua Lipa',
			img_src: 'images/song-4.jpg',
			src: 'music/Cool - Dua Lipa.mp3',
		},
	])

	const [currentSong, setCurrentSong] = useState(0)
	const [nextSong, setNextSong] = useState(currentSong + 1)

	useEffect(() => {
		setNextSong(() => {
			if (currentSong + 1 > songs.length - 1) {
				return 0
			} else {
				return currentSong + 1
			}
		})
	}, [currentSong])

	return (
		<div className='App'>
			<Player
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				nextSong={nextSong}
				songs={songs}
			/>
		</div>
	)
}

export default App
