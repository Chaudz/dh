class UIController {
  home(req, res) {
    return res.render("pages/home", { title: "Nhà hàng hải sản Đại Hằng" });
  }
}

export default new UIController();
