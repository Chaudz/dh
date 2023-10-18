class AdminController {
  index(req, res) {
    return res.send("admin page");
  }
}

export default new AdminController();
