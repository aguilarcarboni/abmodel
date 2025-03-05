import React from 'react'

const TeamDescription = () => {
    const members = [
        {
            name: "Stephanie",
            role: "Full Stack Developer",
            university: "UCR Computer Science"
        },
        {
            name: "Andrea",
            role: "Geological Expert",
            university: "UCR Geology & Civil Engineering"
        },
        {
            name: "Carolina",
            role: "Electrical Engineer",
            university: "UCR Electrical Engineering"
        },
        {
            name: "Victor",
            role: "Software Developer",
            university: "Software Development"
        },
        {
            name: "Larissa",
            role: "Mechanical Engineer",
            university: "UCR Mechanical Engineering"
        },
        {
            name: "Andres",
            role: "Software Developer",
            university: "Texas Tech Computer Science"
        }
    ]
    
    return (
        <div className='members-grid'>
            {members.map((member) => (
                <div key={member.name} className='member-card'>
                    <div className='member-image-container'>
                        <img 
                            src={require(`../../../assets/fotos/${member.name}.jpeg`)} 
                            alt={member.name} 
                            className='member-image'
                        />
                    </div>
                    <div className='member-info'>
                        <h3 className='member-name'>{member.name}</h3>
                        <p className='member-role'>{member.role}</p>
                        <p className='member-university'>{member.university}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamDescription