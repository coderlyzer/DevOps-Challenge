const app = require("../app");
const supertest = require("supertest");



test("GET /api/slug?townName=Bristol&venueName=Thekela", async () => {
  

  await supertest(app).get("/api/slug?townName=Bristol&venueName=Thekela")
    .expect(200)
    .then((response) => {
    // Check data
      expect(response.body.data).toBe("/bristol-events/thekela");
    });
});

test("GET /api/slug?townName=Weston-Super-Mare&venueName=The Playhouse", async () => {
  

    await supertest(app).get("/api/slug?townName=Weston-Super-Mare&venueName=The Playhouse")
      .expect(200)
      .then((response) => {
    
  
        // Check data
        expect(response.body.data).toBe("/weston-super-mare-events/the-playhouse");
      });
  });
  