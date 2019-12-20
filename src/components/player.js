import React, { memo } from 'react'
import '../styles/player.css'

const Player = (props) => {
	const { player } = props
	return (
		<div className="player-root">
			<div className="player-header">
				{player.firstName} {player.lastName}
			</div>
			<div className="player-face-container" >
				<img className="player-face" src={`/${player.image}`}/>
			</div>
			<div className="player-footer">
				<div className="player-footer-row">
					<div className="player-footer-item">W2</div>
					<div className="player-footer-item"/>
					<div className="player-footer-item">230/214</div>
				</div>
				<div className="player-footer-row">
					<div className="player-footer-item">20 GP</div>
					<div className="player-footer-item">10 - 8 - 2</div>
					<div className="player-footer-item">69 PTs</div>
				</div>
			</div>

		</div>)
}

export default memo(Player)