import React, { memo } from 'react'
import Rank from './shared/rank'
import '../styles/team.css'

const Team = (props) => {
	const { team, rank } = props
	return (
		<div className="team-root">
			<Rank rank={rank}/>
			<div className="team-header">
				{team.name}
			</div>
			<div className="team-logo-container" >
				<img className="team-logo" src={`/logos/${team.logo}`}/>
			</div>
			<div className="team-footer" style={{borderColor: team.color}}>
				<div className="team-footer-row">
					<div className="team-footer-item">{team.streak.streakCode}</div>
					<div className="team-footer-item"/>
					<div className="team-footer-item">{team.goalsScored}/{team.goalsAgainst}</div>
				</div>
				<div className="team-footer-row">
					<div className="team-footer-item">{team.gamesPlayed} GP</div>
					<div className="team-footer-item">
						{team.leagueRecord.wins}-{team.leagueRecord.losses}-{team.leagueRecord.ot}
					</div>
					<div className="team-footer-item">{team.points} pts</div>
				</div>
			</div>

		</div>)
}

export default memo(Team)