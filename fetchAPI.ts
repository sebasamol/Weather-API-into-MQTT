async function fetchData() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.4069&longitude=16.9299&current=temperature_2m")
    const data = await response.json()
    console.log('Temperatura zewnętrzna:'+ data.current.temperature_2m)
}

fetchData()