import React, { memo } from 'react'
import '../../styles/rank.css'

const Rank = (props) => {
	const { rank } = props
	return (
		<div className="rank">
			#{ rank }
		</div>)
}

export default memo(Rank)