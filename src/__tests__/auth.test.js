import axios from 'axios';

describe('Auth API Endpoints', () => {

    beforeAll( async () => {

    })
    test('POST/api/register', async () => {
        const requestBody = {email: "test@gmail.com", password:"test"}
        const response = await axios.post('http://localhost:9999/api/register')
   
       expect(response.status).toBe(400);
   
    })
})