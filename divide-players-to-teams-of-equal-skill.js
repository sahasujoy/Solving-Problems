/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let sum = skill.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var totalTeam = skill.length / 2;

    if (sum % totalTeam != 0) return -1;

    var pairTotal = sum / totalTeam;
    const sortedSkill = skill.sort((a, b)=> a - b);

    let l = 0, r = sortedSkill.length - 1, teams = [];
    while (l <= r) {
        if (sortedSkill[l] + sortedSkill[r] === pairTotal) {
            teams.push([sortedSkill[l], sortedSkill[r]]);
            l++;
            r--;
        }
        else if (sortedSkill[l] + sortedSkill[r] < pairTotal) l++;
        else if (sortedSkill[l] + sortedSkill[r] > pairTotal) r--;
    }

    if (teams.length != totalTeam) return -1;

    let result = 0;
    teams.forEach(item => {
        result += item[0] * item[1];
    });

    return result;
};

console.log(dividePlayers([1,1,2,3]));