import React from 'react'

const TeamDescription = () => {
    const members = [
        {
            name: 'Andres',
        },
        {
            name: 'Stephanie',
        },
        {
            name: 'Andreaa',
        },
        {
            name: 'Carolina',
        },
        {
            name: 'Victor',
        },
        {
            name: 'Larissa',
        },
    ]
  return (
    <div className='membersContainers'>
        {members.map((member) => (
            <div key = {member.name} className='memberContainer'>
                <img src={require("../../../assets/fotos/" + member.name + '.jpeg')} alt = {member.name} className='image'></img>
                <p className='subtitle'>{member.name}</p>
            </div>
        ))}
    </div>
  )
}

export default TeamDescription