import * as dao from "./dao.js";
export default function DataRoutes(app) {
  app.get("/api/data", async (req, res) => {
    const data = await dao.findAllData();
    res.send(data);
  });
}
