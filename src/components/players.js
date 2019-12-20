import React, { memo } from 'react'
import players from '../content/players'
import Player from './player'
import '../styles/teams.css'

const Players = (props) => {
	return (
		<div className="teams-root">
			{Object.values(players).map(player => <Player key={player} player={player}/>)}
		</div>)
}

export default memo(Players)