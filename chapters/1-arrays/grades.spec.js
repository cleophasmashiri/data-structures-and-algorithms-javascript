/**
 * Created by cleophas on 2017/03/13.
 */
(function () {
    describe('A grades object', function () {

        var grades;
        var Grades = require('../../chapters/1-arrays/grades');

        module.exports = Grades;

        beforeEach(function () {
            grades = new Grades();
        });

       it('It must add items to an array', function () {
          grades.add(1);
          expect(grades.items.length).toEqual(1);
       });
       it('Should show student average grade', function () {
           grades.add(1);
           grades.add(2);
           expect(grades.getAverage()).toEqual(1.5);
       });

    });
})();