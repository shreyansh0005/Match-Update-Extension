async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=b22a34c8-ea63-49a6-b662-77b2add3298a&offset=0")
        .then(data =>data.json())
        .then(data => {
            if(data.status != "success") return;

            const matchList= data.data;
            if(!matchList) return [];

            const relevantData = matchList.map(match => `${match.name}, ${match.status}`)
            console.log(relevantData);

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

            return relevantData;
        })

        .catch(e => console.log(e));
}
getMatchData();