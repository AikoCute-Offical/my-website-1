// if (!window.chooseProduct) {
//   window.location.href = "../mainpage/main.html";
// }

if (!localStorage.getItem("choose-product")) {
  window.location.href = "../mainpage/main.html";
}

var curQuantity = 1;

const chooseProduct = JSON.parse(localStorage.getItem("choose-product"));

function genProductDetails(product) {
  $(".main-content").innerHTML = `<div class="container">
    <div class="product-img">
      <img
        src="${product.link}"
        alt=""
      />
    </div>
    <div class="product-info">
      <div class="product-info-container">
        <div class="product-title">
          <h1>${product.name}</h1>
        </div>
        <div class="product-des">
          <h2>Mô tả</h2>
          <p>
            ${product.des}
          </p>
        </div>
        <div class="product-price-and-quantity">
          <div class="product-price">
            <h2>Giá sản phẩm</h2>
            <p>${product.price * curQuantity}$</p>
          </div>
          <div class="product-quantity">
            <h2>Số lượng</h2>
            <div class="control-quantity">
              <div class="control minus">-</div>
              <div class="quantity">${curQuantity}</div>
              <div class="control plus">+</div>
            </div>
          </div>
        </div>
        <div class="buy-btn">Bấm vào để mua hàng</div>
      </div>
    </div>
  </div>`;
}

if (chooseProduct) {
  genProductDetails(chooseProduct);
} else {
  window.location.href = "../mainpage/main.html";
}

$(".main-content").onclick = (e) => {
  if (e.target.closest(".control")) {
    switch (e.target.classList[1]) {
      case "minus":
        curQuantity = curQuantity > 1 ? curQuantity - 1 : 1;
        genProductDetails(chooseProduct);

        break;
      case "plus":
        curQuantity = curQuantity + 1;
        genProductDetails(chooseProduct);

        break;
      default:
    }
  }
};
