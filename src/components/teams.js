import React, { memo, useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import teams from '../content/teams'
import Team from './team'
import '../styles/teams.css'

const Teams = (props) => {
	const [data, setData] = useState([])
	const [sortType, setSortType] = useState('overall')

	useEffect(() => {
		async function f() {
		    const result = await axios(
		      'https://statsapi.web.nhl.com/api/v1/standings',
		    );
		    setData(result.data.records);
		}
		f()
	}, []);

	const getTeamsByDivision = (division) => {
		if (!data.length) return []
		return data[division].teamRecords.map(team => ({...team, ...teams[team.team.id]}))
	}

	const teamsByDivision = () => {
		if (sortType !== 'division') return null

		return (<Fragment>
			<h1>East</h1>
			<h3>Metropolitan</h3>
			<div className="teams-root">
				{getTeamsByDivision(0).map((team, rank) => <Team key={team.id} team={team} rank={rank+1}/>)}
			</div>

			<h3>Atlantic</h3>
			<div className="teams-root">
				{getTeamsByDivision(1).map((team, rank) => <Team key={team.id} team={team} rank={rank+1}/>)}
			</div>

			<h1>West</h1>
			<h3>Central</h3>
			<div className="teams-root">
				{getTeamsByDivision(2).map((team, rank) => <Team key={team.id} team={team} rank={rank+1}/>)}
			</div>

			<h3>Pacific</h3>
			<div className="teams-root">
				{getTeamsByDivision(3).map((team, rank) => <Team key={team.id} team={team} rank={rank+1}/>)}
			</div>
		</Fragment>)
	}

	const teamsByAlphabetic = () => {
		if (sortType !== 'alphabetic') return null
		return (
			<Fragment>
				<h1>Alphabetic</h1>
				<div className="teams-root">{[
					...getTeamsByDivision(0),
					...getTeamsByDivision(1),
					...getTeamsByDivision(2),
					...getTeamsByDivision(3)]
					.sort((a, b) => a.name > b.name ? 1 : -1)
					.map((team, rank) => <Team key={team.id} team={team} rank={rank+1}/>)}
				</div>
			</Fragment>)
	}

	const teamsByPoints = () => {
		if (sortType !== 'overall') return null
		return (
			<Fragment>
				<h1>Overall</h1>
				<div className="teams-root">{[
					...getTeamsByDivision(0),
					...getTeamsByDivision(1),
					...getTeamsByDivision(2),
					...getTeamsByDivision(3)]
					.sort((a, b) => a.points < b.points ? 1 : -1)
					.map((team, rank) => <Team key={team.id} team={team} rank={rank+1}/>)}
				</div>
			</Fragment>)
	}

	return (
		<div>
			<div className="teams-toolbar">
				<button onClick={() => setSortType('division')}>Division</button>
				<button onClick={() => setSortType('overall')}>Overall</button>
				<button onClick={() => setSortType('alphabetic')}>Alphabetic</button>
			</div>
			{teamsByDivision()}
			{teamsByAlphabetic()}
			{teamsByPoints()}

		</div>)
}

export default memo(Teams)