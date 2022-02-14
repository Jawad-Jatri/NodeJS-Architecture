import request from "supertest"
import app from "../../../../../config"

describe('login controller', () => {
  it('should successfully login', async () => {
    let response = await request(app)
      .post("/api/v1/auth/login")
      .send({
          "username": "01785604316",
          "password": "asdf1234"
        })
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.message).toEqual("Login Successful!")
    expect(response.statusCode).toBe(200);
  })

  it('should return user not found', async () => {
    let response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        "username": "0178560431",
        "password": "asdf1234"
      })
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.error).toEqual("User not found!")
    expect(response.statusCode).toBe(404);
  })

  it('should return invalid username/password', async () => {
    let response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        "username": "01785604316",
        "password": "asdf12343"
      })
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.error).toEqual("Invalid username / password!");
    expect(response.statusCode).toBe(400);
  })

  it('should return Invalid Password! Must be greater than 8', async () => {
    let response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        "username": "01785604316",
        "password": "asdf12"
      })
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.error).toEqual("Invalid Password! Must be greater than 8");
    expect(response.statusCode).toBe(400);
  })
})
