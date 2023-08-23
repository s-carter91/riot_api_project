import React from 'react'

function playerStats() {
    const cowards = ["Trufflebum", "DirtyHarold", "Elburcho", "Matrixlife"]
    
    if (isLoading === true) {
        return (
        <>
            <p>loading</p>
        </>
        )}
    else {
    return (
        <>
        <div className="App">
            <h1>Here is the Site</h1>
            {participantData.map((player, index) => {
            console.log(player.spell4Casts)
            if (cowards.includes(player.summonerName) === true) {
            if (player.spell4Casts >= 10) {
                return <>
                <div key ={index} className="oversp">
                    <p>{`${player.summonerName}`} played {`${player.championName}`} and cast their ult {`${player.spell4Casts}`} times</p>
                    <p>They also bought {`${player.visionWardsBoughtInGame}`} pink wards and bait pinged {`${player.baitPings}`} times</p>
                </div>
                </> 
            } else {
                return <>
                <div key ={index} className = "undersp">
                    <p>{`${player.summonerName}`} played {`${player.championName}`} and cast their ult {`${player.spell4Casts}`} times</p>
                    <p>They also bought {`${player.visionWardsBoughtInGame}`} pink wards and bait pinged {`${player.baitPings}`} times</p>
                
                </div>
                </>
            }
            }})}
            {/* <p>{gameData.info.participants[5].summonerName} cast his ult {gameData.info.participants[5].spell4Casts} times</p> */}
        </div>
        </>
        )
        }
}

export default playerStats