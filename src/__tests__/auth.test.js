
// import axios from 'axios';

// let validateStatus =  function (status) {
//     return true;
// }

// test('should pass', () => {
//     expect(1).toBe(1);
// })
// describe('Auth API Endpoints', () => {

//     beforeAll( async () => {   
//         await axios.post('http://localhost:4420/api/delete', { password: "test" });
//         //TODO: hit our server and see if its alive, otherwise kick out.
//         //TODO: hit our delete for our testUser
        
//     })

//     describe('POST /api/register', () => {

//         test('Should return 200 if given an a new user', async () => {
//             const requestBody = { email: "test@gmail.com", password: "test" } 
         
//             const response = await axios.post('http://localhost:4420/api/register', requestBody);
                
//             expect(response.status).toBe(200);
//             expect(response.data).toHaveProperty("email");
//             expect(response.data).not.toHaveProperty("password");
//         })
//     })

//     describe('DELETE /api/logout', () => {
        
//         test('Should return 200 when hit', async () => {
//             const requestBody = { password: "test" } 
         
//             const response = await axios.delete('http://localhost:4420/api/logout', requestBody);
                
//             expect(response.status).toBe(200);
//         })
//     })

//     describe('POST /api/login', () => {
        
//         test('Should return 200 when hit', async () => {
//             const requestBody = { email: "test@gmail.com", password: "test" } 
         
//             const response = await axios.post('http://localhost:4420/api/login', requestBody);
                
//             expect(response.status).toBe(200);
//             expect(response.data).toHaveProperty("email");
//             expect(response.data).not.toHaveProperty("password");
//         })
//     })

//     describe('POST /api/delete', () => {
        
//         test('Should return 200 when deleting user on session with correct password submitted', async () => {
//             const requestBody = { password: "test" } 
         
//             const response = await axios.post('http://localhost:4420/api/delete', requestBody);
                
//             expect(response.status).toBe(200);
//         })
//     })
// })