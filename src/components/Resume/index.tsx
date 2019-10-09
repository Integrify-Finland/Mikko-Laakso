import * as React from 'react'
import './styles.scss'
interface Props {
	opinnot: string[]
	varusmies: string[]
	tyo: string[]
	luottamus: string[]
}
const Resume: React.FC<Props> = ({opinnot, varusmies, tyo, luottamus}) => {
	return (
		<>
			<h1 className="resume--title">Ansioluettelo</h1>
			<div className="resume">
				<section className="resume__col-1">
					<div className="resume__col-1--wrapper">
						<h1>Opinnot</h1>
						<ul>
							{opinnot.map((el, i) => (
								<li key={i}>{el}</li>
							))}
						</ul>
					</div>
					<div className="resume__col-1--wrapper">
						<h1>Varusmiespalvelus</h1>
						<ul>
							{varusmies.map((el, i) => (
								<li key={i}>{el}</li>
							))}
						</ul>
					</div>
					<div className="resume__col-1--wrapper">
						<h1>Työelämässä</h1>
						<ul>
							{tyo.map((el, i) => (
								<li key={i}>{el}</li>
							))}
						</ul>
					</div>
				</section>
				<section className="resume__col-2">
					<div className="resume__col-2--wrapper">
						<h1>Luottamustoimet</h1>
						<ul>
							{luottamus.map((el, i) => (
								<li key={i}>{el}</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</>
	)
}

export default Resume
