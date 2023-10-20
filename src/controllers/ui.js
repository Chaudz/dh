class UIController {
  home(req, res) {
    return res.render("pages/home", { title: "Nhà hàng hải sản Đại Hằng" });
  }
  menu(req, res) {
    return res.render("pages/menu", { title: "Menu cơm hải sản Đại Hằng" });
  }
}

export default new UIController();
