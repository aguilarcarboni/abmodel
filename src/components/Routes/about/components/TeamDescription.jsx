import React from 'react'

const TeamDescription = () => {
    const members = [
        {
            name: 'Andres',
        },
        {
            name: 'Stephanie',
        },
    ]
  return (
    <div>
        {members.map((member) => (
            <div key = {member.name} className='memberContainer'>
                <img src={require("../../../assets/fotos/" + member.name + '.jpeg')} alt = {member.name} className='image'></img>
            </div>
        ))}
    </div>
  )
}

export default TeamDescription