const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/index');

tape('testing doners endpoint',(t)=>{
    supertest(app)
      .get('/doners')
      .expect(200)
      .end((err,result)=>{
          t.equal(result.body[0].name,
            'mark',
            'the first name should be mark');
          t.end();
      });
});