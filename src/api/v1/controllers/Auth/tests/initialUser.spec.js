const request = require("supertest")
const app = require("../../../../../config")
const {makeFakeUser} = require("../../../../../../__test__/user")

describe('initialUser controller', () => {
  it('should successfully POST an user', async () => {
    let response = await request(app)
      .post("/api/v1/auth/init")
      .send(makeFakeUser({ name: "akil"}))
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.user.name).toEqual("akil");
    expect(response.statusCode).toBe(200);
  })

  it('should return phone already exist', async () => {
    let response = await request(app)
      .post("/api/v1/auth/init")
      .send(makeFakeUser({ phone: "01872796633"}))
      .set('Accept', 'application/json')

    let againResponse = await  request(app).post("/api/v1/auth/init")
      .send(makeFakeUser({ phone: "01872796633"}))
      .set('Accept', 'application/json')

    expect(againResponse.headers["content-type"]).toMatch(/json/);
    expect(againResponse.body.error).toEqual("phone already exists!");
    expect(againResponse.statusCode).toBe(400);
  })

  it('should return invalid user roles', async () => {
    let response = await request(app)
      .post("/api/v1/auth/init")
      .send(makeFakeUser({ roles: "11,12"}))
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.error).toEqual("Invalid user roles");
    expect(response.statusCode).toBe(400);
  })

  it('should return Invalid Password! Must be greater than 8', async () => {
    let response = await request(app)
      .post("/api/v1/auth/init")
      .send(makeFakeUser({ password: "asf"}))
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.error).toEqual("Invalid Password! Must be greater than 8");
    expect(response.statusCode).toBe(400);
  })
})
