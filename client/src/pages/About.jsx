import React from 'react'
import { useUserContext } from '../hooks/context/useUserContext';

const About = () => {
  const { user } = useUserContext();
  console.log({ user });

  return (
    <div>About</div>
  )
}

export default About