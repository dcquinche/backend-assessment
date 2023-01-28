import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe("Fav Endpoint", () => {
  describe("GET /favs", () => {
    test("should respond a 200 status code", async () => {
      // Arrange
      const statusCode = 200;

      // Act
      const res = await request.get("/api/favs");

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });

    test("should respond with an array of favs list", async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await request.get("/api/favs");

      // Assert
      expect(result.body).toBeInstanceOf(expected);
      expect(result.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            _id: expect.any(String),
            name: expect.any(String),
            list: expect.arrayContaining([
              expect.objectContaining({
                title: expect.any(String),
                description: expect.any(String),
                link: expect.any(String),
                _id: expect.any(String),
              })
            ]),
          }),
        ])
      );
    });
  });

  describe("GET /favs/:id", () => {
    test("should respond a 200 status code", async () => {
      // Arrange
      const statusCode = 200;

      // Act
      const res = await request.get("/api/favs/63d440641967ad6b881a3914");

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });
    test("should respond a 500 status code", async () => {
      // Arrange
      const statusCode = 500;

      // Act
      const res = await request.get("/api/favs/999");

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });
  })

  describe("POST /favs", () => {
    test("should respond a 200 status code", async () => {
      // Arrange
      const statusCode = 200;
      const body = {
        name: "Sports",
        list: [{
          title: "Basketball",
          description: "Two teams compete to score the most points, with the objective of shooting a ball into a hoop to gain points.",
          link: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg"
        }],
      };

      // Act
      const res = await request.post("/api/favs").send(body);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });

    test("should have a Content-type: application/json; charset=utf-8 header", async () => {
      // Arrange
      const body = {
        name: "Sports",
        list: [{
          title: "Basketball",
          description: "Two teams compete to score the most points, with the objective of shooting a ball into a hoop to gain points.",
          link: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg"
        }],
      };

      // Act
      const res = await request.post("/api/favs").send(body);

      // Assert
      expect(res.header["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(res.header["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("DELETE /favs/:id", () => {
    test("should respond with a 500 when favs do not exist", async () => {
      //Arrange
      const statusCode = 500;

      // Act
      const res = await request.delete("/api/favs/999");

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });
  });

  describe("PATCH /favs/:id", () => {
    test("should respond with a 200 status code", async () => {
      // Arrange
      const statusCode = 200;
      const fav = {
        title: "Pop",
          description: "Lives on in composers writing scores for performance by orchestras, for chamber ensembles or for solo performers.",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tokyo_String_Quartet.jpg/300px-Tokyo_String_Quartet.jpg"
      };
      // Act
      const res = await request.patch("/api/favs/63d440641967ad6b881a3914").send(fav);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });

    test("should respond with a 500 when fav do not exist", async () => {
      // Arrange
      const statusCode = 500;
      const fav = {
        title: "Pop",
          description: "Lives on in composers writing scores for performance by orchestras, for chamber ensembles or for solo performers.",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tokyo_String_Quartet.jpg/300px-Tokyo_String_Quartet.jpg"
      };

      // Act
      const res = await request.patch("/api/favs/999").send(fav);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });
  });
})
