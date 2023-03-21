import '../../../styles/Experience.css';

const ExperienceInfo = ({ experience }) => {
	const { position, description } = experience;

	return (
		<div className="ex-expand">
			<h5> {position}</h5>
			<p>{description}</p>
		</div>
	);
};

export default ExperienceInfo;
