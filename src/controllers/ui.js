class UIController {
  home(req, res) {
    return res.render("pages/home", { title: "Nhà hàng hải sản Đại Hằng" });
  }
  menu(req, res) {
    return res.render("pages/menu", { title: "Menu cơm hải sản Đại Hằng" });
  }
  space(req, res) {
    return res.render("pages/restaurant_space", {
      title: "Không gian nhà hàng Đại Hằng",
    });
  }
  bookTable(req, res) {
    return res.render("pages/book_table", {
      title: "Đặt bàn nhà hàng Đại Hằng",
    });
  }
}

export default new UIController();
