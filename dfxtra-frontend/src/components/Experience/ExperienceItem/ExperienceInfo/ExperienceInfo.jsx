import '../../../styles/Experience.css'

const ExperienceInfo = ({experience})=>{

const {position, description} = experience;

    return(
        <div className='ex-expand'>
        <h4> {position}</h4>
        <p>{description}</p>
        </div>
    )
}

export default ExperienceInfo;