import React, { useState } from 'react'

function InputSummoner() {
    const [ summonerName, setSummonerName] = useState('')
    const [ summonerGameIds, setSummonerGameIds ] = useState([])
    const apiKey= "RGAPI-f178935e-3db2-42f6-9018-7ab1072aa90d"

    const handleSubmit = (e) => {
        e.preventDefault()
        getUsersGames()
    }

        const getUsersGames = async() => { 
            const getGameIds = await fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'}
        })
        const data = await getGameIds.json()
        setSummonerGameIds(data)
        }

    return(
        <>
            <form className='form' onSubmit={handleSubmit}>
                <label>Summoner Name (In Game Name)</label>
                <input type='text'
                    placeholder='Enter your Summoner Name'
                    onChange={(e) => setSummonerName(e.target.value)}
                    // value ={summoner}
                />
            </form>
        </>
    )
}

export default InputSummoner