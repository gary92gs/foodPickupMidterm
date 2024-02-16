// On click functions for order page
$(document).on('click', '#accept-but', function() {
  let $button = $(this);
  let orderId = $(this).closest(".order-info").find(".order-id h3[data-order-id]").eq(0).data("order-id");
  let estiTime = prompt("Estimated Order time in minutes?");

  estiTime = parseInt(estiTime);

  if (!isNaN(estiTime) && estiTime > 0) {
    sendMessage(`Your Order number #${orderId} has been accepted. Estimated order ready for pickup in: ${estiTime} minutes`);
    $button.closest("div").html("<p>Order Accepted</p>");
    updateActiveOrder(orderId);
  } else {
    alert("Invalid time estimate.");
  }
});


