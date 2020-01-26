let team: Team  = {
    goalsScored : 51,
    addGoals(value) {
        this.goalsScored += value;
    }
}
type Team = {goalsScored: number, addGoals: (val:number) => void}

let liverpool: { name: string, team: Team, mainPlayers: string[] } = {
    name: "Liverpool",
    team: team,
    mainPlayers: ["Sadio Mané", "Mohamed Salah", "Roberto Firmino", "Virgil van Dijk"]
}

liverpool.team.addGoals(2);