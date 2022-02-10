const request = require("supertest")
const app = require("../../../../../config")
const {makeFakeUser} = require("../../../../../../__test__/user")

describe('initialUser controller', () => {
  it('successfully POST an user', async () => {
    let response = await request(app)
      .post("/api/v1/auth/init")
      .send(makeFakeUser({ name: "akil"}))
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.user.name).toEqual("akil");
    expect(response.statusCode).toBe(200);
  })
})
