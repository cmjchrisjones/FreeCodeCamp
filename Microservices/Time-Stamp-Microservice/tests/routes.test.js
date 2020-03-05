// const app = require('../server');
// const request = require('supertest');
// const request = supertest(app);

// // describe('Time Endpoints', () => {
// //     // it('should return current date if no date supplied', async () => {
// //     //   request.get('/api/timestamp')
// //     //   done();
// //     // })
// // })

// describe('Get Requests', () => {
//     it('should return hey up for default path', async done => {
//         app
//             .get('/')
//             .expect(200)
//             .end(function (err, res) {
//                 if (err) throw err;
//             });
//     });

//     // it('gets the test endpoint', async done => {
//     //     const response = await request.get('/test')

//     //     expect(response.status).toBe(200)
//     //     expect(response.body.message).toBe('pass!')
//     //     done()
//     //   })

// });

const request = require('supertest');
const app = require('../server');

describe('Test 1 - GET Requests', () => {
    it('default path should return \'Hey Up\' text', () => {
        // expect(true).toBe(true)
        var res = request(app)
            .get('/');

            console.log(res);

            expect(res.status).toBe(200);
    })

    it('when no date is specified, then today\'s date should be  returned', async done => {

        var expected = {
            unix: null,
            utc: "Invalid Date"
        };

        var res = await request(app).get('/api/timestamp');

        expect(res.status).toBe(200);
        expect(res).toEqual({
            unix: null,
            utc: "Invalid Date"
        });

        /*
        test('object assignment', () => {
            const data = {one: 1};
            data['two'] = 2;
            expect(data).toEqual({one: 1, two: 2});
        });
 */

    })
});