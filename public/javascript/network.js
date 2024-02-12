function getAllMenuItems() {
  let url = "/api/menu-items";
  return $.ajax({
    url
  });
}
