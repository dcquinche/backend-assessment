import supertest from 'supertest';
import app from '../../index';
import { faker } from '@faker-js/faker';

const request = supertest(app);

describe("POST /user", () => {
  test("should respond a 200 status code", async () => {
    // Arrange
    const statusCode = 200;
    const body = {
      email: faker.internet.email(),
      password: faker.internet.password(10),
    };

    // Act
    const res = await request.post("/api/users").send(body);

    // Assert
    expect(res.statusCode).toEqual(statusCode);
  });

  test("should respond with a 500 when password is missing", async () => {
    // Arrange
    const statusCode = 500;
    const body = {
      email: "test@gmail.com",
    };

    // Act
    const res = await request.post("/api/users").send(body);

    // Assert
    expect(res.statusCode).toEqual(statusCode);
  });

  test("should respond with a 500 when email is missing", async () => {
    // Arrange
    const statusCode = 500;
    const body = {
      password: "433021ddmas",
    };

    // Act
    const res = await request.post("/api/users").send(body);

    // Assert
    expect(res.statusCode).toEqual(statusCode);
  });

  test("should have a Content-type: application/json; charset=utf-8 header", async () => {
    // Arrange
    const body = {
      email: "test@gmail.com",
      password: "433021ddmas",
    };

    // Act
    const res = await request.post("/api/users").send(body);

    // Assert
    expect(res.header["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(res.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});
