"use strict";
var team = {
    goalsScored: 51,
    addGoals: function (value) {
        this.goalsScored += value;
    }
};
var liverpool = {
    name: "Liverpool",
    team: team,
    mainPlayers: ["Sadio Mané", "Mohamed Salah", "Roberto Firmino", "Virgil van Dijk"]
};
liverpool.team.addGoals(2);
//# sourceMappingURL=exercise1.js.map