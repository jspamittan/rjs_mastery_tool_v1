import { PollContext } from '../../core/context/PollsContext.js'
import { useContext, useState } from 'react';
import PollsList from './PollsList'

const PollsTemplate = () => {
  
  const [polls, setPolls] = useContext(PollContext);

    return(
        <>
            {
                polls.map((poll, key) => (
                <PollsList arrKey={key} id={poll.id} name={poll.name}/>
                )).reverse()
            }
        </>
    )
}

export default PollsTemplate;