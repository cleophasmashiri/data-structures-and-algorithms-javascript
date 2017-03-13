/**
 * Created by cleophas on 2017/03/13.
 */
(function () {
    function Grades() {
        this.items = [];

        this.add = function (item) {
            this.items.push(item);
        }

        this.getAverage = function () {
            var total = 0;
            this.items.forEach(function (item) {
                total = total + item;
            });
            return total / this.items.length;
        }
    }

    module.exports = Grades;
})()