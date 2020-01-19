let team = {
    goalsScored : 51,
    addGoals(value) {
        this.goalsScored += value;
    }
}

let liverpool = {
    name: "Liverpool",
    team: team,
    mainPlayers: ["Sadio Mané", "Mohamed Salah", "Roberto Firmino", "Virgil van Dijk"]
}

liverpool.team.addGoals(2);