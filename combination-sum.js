/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remaining, path, start) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        if (remaining < 0) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);

            backtrack(remaining - candidates[i], path, i);

            path.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
}

console.log(combinationSum([2,3,6,7], 7));