import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import  InputSummoner  from './InputSummoner'


function App() {
  const [ gameData, setGameData] = useState({})
  // const [ puuid, setPuuid] = useState({})
  const [ participantData, setParticipantData ] = useState('')
  const [ isLoading, setIsLoading ] = useState(true)
  const [ awaitingAccount, setawaitingAccount ] = useState(true)
  const [ summonerAccName, setSummonerAccName ] = useState('')
  const [ account, setAccount ] = useState({})
  const [ championData, setChampionData ] = useState([])
  const [ topMasteryData, setTopMasteryData ] = useState([])
  const [ awaitingTopChamps, setAwaitingTopChamps ] = useState(true)
  const apiKey= "RGAPI-1131a04c-97fd-46e7-bc18-0288c8dd3fc1"

  class Champion {
    constructor(id, name) {
    this.id = id,
    this.name = name
  }}


  // useEffect(() => {
  //   async function getGame() {
  //     const res = await fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/OC1_560419899?api_key=${apiKey}`)
  //     const data = await res.json()
  //     setGameData(data)
  //     setIsLoading(false)
  //     console.log(data.info.participants)
  //     }
  //     getGame()
  // },[])


  // useEffect(() => {
  //   async function getGame() {
  //     const res = await fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/OC1_526469244?api_key=${apiKey}`)
  //     const data = await res.json()
  //     setGameData(data)
  //     setIsLoading(false)
  //     console.log(data.info.participants)
  //     }
  //     getGame()
  // },[])
  const handleAccountSubmit = (event) => {
    event.preventDefault()
    getAccount()
  }

  async function getAccount() {
    const res = await fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerAccName}?api_key=${apiKey}`)
    const data = await res.json()
    setAccount(data)
    console.log(data)
    setawaitingAccount(false)
    await handleTopChamp()
  }

  // const handleTopChamp = (event) => {
  //   event.preventDefault()
  //   getTopChamp()
  // }

  useEffect(() => {
  async function getTopChamp() {
    const res = await fetch(`https://oc1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${account.id}/top?count=10&api_key=${apiKey}`)
    const data = await res.json()
    setTopMasteryData(data)
    console.log(data)
    setAwaitingTopChamps(false)
  }
  getTopChamp()

}, [account])

  // const handleTftData = (event) => {
  //   event.preventDefault()
  //   getTftData()
  // }

  // async function getTftDamage(games) {
  //   games.forEach()
  //   const res
  // }

  // async function getTftData() {
  //   const res = await fetch(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${account.puuid}/ids?start=0&count=5&api_key=${apiKey}`)
  //   const data = await res.json()
  //   const damageList= []
  //   data.forEach ((game) => 
  //     beez = await fetch(`https://americas.api.riotgames.com/tft/match/v1/matches/${game}?api_key=${apiKey}`),
  //     deez = await beez.json(),
  //   )
  //   setTftData(data)
  //   console.log(data)
  //   setAwaitingTftData(false)
  // }

  useEffect(() => {
    async function getChampions() {
      const res = await fetch('http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json')
      console.log(res)
      const data = await res.json()
      // console.log(data)
      const champs = await Object.values(data.data)
      console.log(champs.length)
      const championList = []
      await champs.forEach((champo) => {
        // console.log(champo)
        let champ = new Champion(champo.key, champo.name)
        console.log(champ)
        championList.push(champ)
      })
      console.log(championList)
      await setChampionData(championList)
      console.log(`this is da champ data ${championData}`)

    //   await data.data.forEach((champo) => {
    //     let champ = new Champion(champo.key, champo.name)
    //     setChampionData(...championData, champ)
    // })
      // console.log(championData)
    }
    getChampions()
  }, [])

  // console.log(championData.find(champ => champ.id == 142).name)

  // async function getPuuid() {
  //   const res = await fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerAccName}?api_key=${apiKey}`)
  //   const data = await res.json()
  //   setPuuid(data.puuid)
  //   setawaitingPuuid(false)
  // }


  // const handleGetGameSubmit = (event) => {
  //   event.preventDefault()
  //   getGame()
  // }

  // async function getGame() {
  //   const res = await fetch(``)
  // }

  // useEffect(() => {
  //   async function getParticipants() {
  //     const res = await fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/OC1_526469244?api_key=${apiKey}`)
  //     const data = await res.json()
  //     setParticipantData(data.info.participants)
  //     setIsLoading(false)
  //     // console.log(data.info.participants)
  //     }
  //     getParticipants()
  // },[])

  // useEffect(() => {
  //     fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/OC1_560419899?api_key=${apiKey}`)
  //       .then(res => res.json())
  //       .then(json => setGameData(json))

  //       // .then(console.log(json))
  //     }, [] )
  //     set
  //     console.log(gameData)

    const cowards = [ "ArchangelofLight", "Trufflebum", "DirtyHarold", "Elburcho", "Matrixlife" ]
    
    // if (isLoading === true) {
    //     return (
    //     <>
    //         <p>loading</p>
    //     </>
    //     )}
    // else {
    return (
        <>
        {/* {isLoading ? <p>loading</p>: 
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
                    <p>They also bought {`${player.visionWardsBoughtInGame}`} pink wards and bait pinged {`${player.assistPings}`} times</p> */}
                    <form onSubmit={handleAccountSubmit}>
                      <input onChange={(e) => setSummonerAccName(e.target.value)} placeholder='(Summoner name)'></input>
                      <br></br>
                      <button type="submit" >Submit</button>
                    </form>
                    {/* <button onClick={}>Get Latest Game</button>*/}
                    {awaitingAccount ? 
                      <p>Please Enter an Account</p> 
                      : 
                      <>
                        {/* <p>{account.id}</p> */}
                        {/* <button onClick={handleTopChamp}>Get Top 10 Champs</button> */}
                        {awaitingTopChamps ? <></> : 
                          <>
                          <p>{account.name} is level {account.summonerLevel}</p>
                          <ol>
                            {topMasteryData.map((topChamp) => <li>{championData.find((champ) => champ.id == topChamp.championId).name} - {topChamp.championPoints} Mastery Points</li>)}
                          </ol>
                            {/* <p>{championData.find((champ) => (champ.id == topMasteryData[0].championId)).name} - {topMasteryData[0].championPoints} Mastery Points</p> */}
                          </>
                        }
                          
                      </>}
                {/* </div> */}
                </>
              
    )
            {/* <p>{gameData.info.participants[5].summonerName} cast his ult {gameData.info.participants[5].spell4Casts} times</p> */}
            // championData.find(champ => Number(champ.id) ==
}

export default App
