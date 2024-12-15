    /**
    * @param {number} x
    * @return {number}
    */
    var mySqrt = function(x) {
        let l = 0;
        let r = x;
        let mid = 0;

        while (l <= r) {
            mid = Math.floor((l + r) / 2);
            if (mid *  mid === x) return mid;
            else if (mid * mid < x) l = mid + 1;
            else r = mid - 1;
        }
        return r;
    };

    console.log(mySqrt(6));