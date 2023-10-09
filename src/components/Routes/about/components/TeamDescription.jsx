import React from 'react'

const TeamDescription = () => {
    const members = [
        {
            name: "Stephanie",
        },
        {
            name: "Andrea",
        },
        {
            name: "Carolina",
        },
        {
            name: "Victor",
        },
        {
            name: "Larissa",
        },
        {
            name: "Andres",
        }
    ]
  return (
    <div className='membersContainers'>
        {members.map((member) => (
            <div key = {member.name} className='memberContainer'>
                <img src={require(`../../../assets/fotos/${member.name}.jpeg`)} alt = {member.name} className='image'></img>
                <p className='subtitle'>{member.name}</p>
            </div>
        ))}
    </div>
  )
}

export default TeamDescription