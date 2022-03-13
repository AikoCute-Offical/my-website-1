if (localStorage.getItem("choose-product")) {
  localStorage.removeItem("choose-product");
}

const productData = [
  {
    id: 1,
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-3.png",
    name: "Sách hay",
    des: "Đây là sách nói về những gì mà chúng tôi hay làm",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 2,
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-4.png",
    name: "Nghĩ và làm giàu",
    des: "Think & Grow Rich - Nghĩ Giàu Và Làm Giàu là một trong những cuốn sách về cách bước chân vào thế giới của Napoleon Hill được bán chạy nhất mọi thời đại. Đã hơn 60 triệu bản được phát hành với gần trăm ngôn ngữ trên toàn thế giới và được công nhận là cuốn sách tạo ra nhiều triệu phú hơn, một cuốn sách truyền cảm hứng thành công nhiều hơn bất cứ cuốn sách kinh doanh nào trong lịch sử.",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 3,
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-5.png",
    name: "Người Giỏi Không Phải Là Người Làm Tất Cả",
    des: "Ngắn gọn, súc tích và đi thẳng vào vấn đề là những gì bạn thấy ngay từ những trang đầu của cuốn sách Người Giỏi Không Phải Là Người Làm Tất Cả này. Từ những người mới bắt đầu tìm hiểu về nghệ thuật quản lý hay đến cả những người đã từng học những khóa học đắt tiền về quản lý cũng sẽ phải gật gù tâm đắc với “Người giỏi không phải là người làm tất cả”. Vì những điều được nói trong cuốn sách thực sự là những điều rất hữu ích và cần thiết nhưng không phải khóa học quản lý nào cũng làm người học hiểu được những điều đó.",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 4,
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-6.png",
    name: "Người Thông Minh Giải Quyết Vấn Đề Như Thế Nào?",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 5,
    link: "https://alphardia.com/wp-content/uploads/2021/12/tu-duy-nhanh-va-cham-tac-gia-daniel-kahneman-1.jpg",
    name: "Người Thông Minh Giải Quyết Vấn Đề Như Thế Nào?",
    des: "Tư duy nhanh và chậm”, cuốn sách nổi tiếng tổng hợp tất cả nghiên cứu được tiến hành qua nhiều thập kỷ của nhà tâm lý học từng đạt giải Nobel Kinh tế Daniel Kahneman sẽ cho bạn thấy những sư hợp lý và phi lý trong tư duy của chính bạn",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 6,
    link: "https://product.hstatic.net/200000123069/product/book1_ntmn__1__85927643bab14b0ab9a82d4d3791a141_master.jpg",
    name: "Người trong muôn nghề - Tủ sách hướng nghiệp",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 7,
    link: "https://product.hstatic.net/200000123069/product/book1_ntmn__1__85927643bab14b0ab9a82d4d3791a141_master.jpg",
    name: "Người trong muôn nghề - Tủ sách hướng nghiệp",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 8,
    link: "https://product.hstatic.net/200000123069/product/book1_ntmn__1__85927643bab14b0ab9a82d4d3791a141_master.jpg",
    name: "Người trong muôn nghề - Tủ sách hướng nghiệp",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 9,
    link: "https://product.hstatic.net/200000123069/product/book1_ntmn__1__85927643bab14b0ab9a82d4d3791a141_master.jpg",
    name: "Người trong muôn nghề - Tủ sách hướng nghiệp",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: Math.ceil(Math.random() * 10),
  },
  {
    id: 10,
    link: "https://product.hstatic.net/200000123069/product/book1_ntmn__1__85927643bab14b0ab9a82d4d3791a141_master.jpg",
    name: "Người trong muôn nghề - Tủ sách hướng nghiệp",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: Math.ceil(Math.random() * 10),
  },
];

var renderProductData = productData.slice(0);

// Gen Select
function genCustomSelectHTMLString(className, menuName, itemNameArr) {
  return `
          <div class="select${className ? ` ${className}` : ""}">
            ${menuName}
            <div class="select-options">

              ${itemNameArr
                .map((item, index) => {
                  if (typeof item === "object") {
                    return `<div class="select-option${
                      item.className ? ` ${item.className}` : ""
                    }">${item.name}</div>`;
                  }
                  return `<div class="select-option">${item}</div>`;
                })
                .join(" ")}
            </div>
          </div>`;
}

const menuArr = [
  {
    className: "sort-by-name",
    menuName: "Sort By Name",
    itemNameArr: [
      {
        name: "A - Z",
        className: "name-increase",
      },
      {
        name: "Z - A",
        className: "name-decrease",
      },
      {
        name: "Original",
        className: "name-default",
      },
    ],
  },

  {
    menuName: "Sort By Price",
    itemNameArr: [
      {
        name: "Increase",
        className: "price-increase",
      },
      {
        name: "Decrease",
        className: "price-decrease",
      },
      {
        name: "Original",
        className: "price-default",
      },
    ],
  },
];

(function genSelectToElement(selector, menuArr) {
  let menuHTMLString = "";
  menuArr.forEach((menu) => {
    menuHTMLString += genCustomSelectHTMLString(
      menu?.className || undefined,
      menu.menuName,
      menu.itemNameArr
    );
  });

  $(selector).innerHTML = menuHTMLString;
})(".filter-bar", menuArr);

function genOverflowString(string, numberOfCharacter) {
  return string.length > numberOfCharacter
    ? `${string.slice(0, numberOfCharacter).trim()}...`
    : string;
}

// Gen Product
const productDesLength = 35;
const productNameLength = 12;

function genProductHTMLString(product) {
  return `<div id="product-${product.id}" class="product-group">
    <div class="product-img">
      <img
        src="${product.link}"
        alt="product"
      />
    </div>
    <div class="product-info">
      <div class="product-info-left">
        <h1 class="product-name">${genOverflowString(
          product.name,
          productNameLength
        )}</h1>
        <p class="product-des">${genOverflowString(
          product.des,
          productDesLength
        )}</p>
      </div>
      <div class="product-info-right">
        <h1 class="product-price-title">Price</h1>
        <p class="product-price">${product.price}$</p>
      </div>
    </div>
    <div class="detail-btn">Nhấn vào để xem</div>
  </div>`;
}

function genProductList(productList) {
  let productStringHTML = "";
  productList.forEach((product) => {
    productStringHTML += genProductHTMLString(product);
  });

  $(".product-container").innerHTML = productStringHTML;
}

function renderProductlist(
  productData,
  numberOfRecordPerPage = 4,
  currentPage = 0
) {
  const startIndex = currentPage * numberOfRecordPerPage;

  const renderRecord = productData.slice(
    startIndex,
    startIndex + numberOfRecordPerPage
  );

  genProductList(renderRecord);
}

// Gen pagination
// Active page = index + 1

var currentPage = 0;
function genCurrentPage(page) {
  if (page < 0) return 0;

  if (page > Math.floor(renderProductData.length / numberOfRecordPerPage))
    return Math.floor(renderProductData.length / numberOfRecordPerPage);

  return page;
}
const numberOfRecordPerPage = 4;
function genPagination(
  totalProduct,
  numberOfRecordPerPage = 4,
  activePage = 0
) {
  var totalPage = Math.ceil(totalProduct / numberOfRecordPerPage);

  var paginationString = "";

  for (let i = 0; i < totalPage; i++) {
    paginationString += `<div id="${i}" class="page${
      Number(activePage) === i ? " active-page" : ""
    }">${i + 1}</div>`;
  }

  const nextPageStringHtml = `<div id="next" class="page">></div>`;
  const prevPageStringHtml = `<div id="prev" class="page"><</div>`;

  $(".pagination-bar").innerHTML =
    prevPageStringHtml + paginationString + nextPageStringHtml;
}

genPagination(productData.length);

renderProductlist(productData);

$(".pagination-bar").onclick = (e) => {
  if (e.target.closest(".page")) {
    switch (e.target.id) {
      case "next":
        currentPage = genCurrentPage(currentPage + 1);
        renderProductlist(
          renderProductData,
          numberOfRecordPerPage,
          genCurrentPage(currentPage)
        );
        genPagination(
          renderProductData.length,
          numberOfRecordPerPage,
          genCurrentPage(currentPage)
        );
        break;
      case "prev":
        currentPage = genCurrentPage(currentPage - 1);
        renderProductlist(
          renderProductData,
          numberOfRecordPerPage,
          genCurrentPage(currentPage)
        );
        genPagination(
          renderProductData.length,
          numberOfRecordPerPage,
          genCurrentPage(currentPage)
        );
        break;
      default:
        currentPage = e.target.id;
        renderProductlist(
          renderProductData,
          numberOfRecordPerPage,
          currentPage
        );
        genPagination(
          renderProductData.length,
          numberOfRecordPerPage,
          currentPage
        );
    }
  }
};

// Filter
$(".filter-bar").onclick = (e) => {
  if (e.target.closest(".select-option")) {
    if (e.target.classList[1]) {
      const classNameArr = e.target.classList[1].split("-");
      // Filter By Name
      if (classNameArr[0] === "name") {
        switch (classNameArr[1]) {
          case "increase": {
            renderProductData = renderProductData
              .slice(0)
              .sort((a, b) => a.name.localeCompare(b.name));
            renderProductlist(renderProductData);
            break;
          }
          case "decrease": {
            renderProductData = renderProductData
              .slice(0)
              .sort((a, b) => -a.name.localeCompare(b.name));
            renderProductlist(renderProductData);
            break;
          }

          default:
            renderProductData = renderProductData
              .slice(0)
              .sort((a, b) => a.id - b.id);
            renderProductlist(renderProductData);
            break;
        }
      }

      // Filter By Price
      if (classNameArr[0] === "price") {
        console.log("price");
        switch (classNameArr[1]) {
          case "increase": {
            renderProductData = renderProductData
              .slice(0)
              .sort((a, b) => a.price - b.price);
            renderProductlist(renderProductData);
            break;
          }
          case "decrease": {
            renderProductData = renderProductData
              .slice(0)
              .sort((a, b) => -(a.price - b.price));
            renderProductlist(renderProductData);
            break;
          }

          default:
            renderProductData = renderProductData
              .slice(0)
              .sort((a, b) => a.id - b.id);
            renderProductlist(renderProductData);
            break;
        }
      }
    }
  }
};

// Handle Click to product
$(".product-container").onclick = (e) => {
  if (e.target.closest(".product-group")) {
    const chooseProduct = productData.find((product) => {
      return (
        product.id ===
        Number(e.target.closest(".product-group").id.split("-")[1])
      );
    });

    localStorage.setItem("choose-product", JSON.stringify(chooseProduct));

    window.location.href = "../detailspage/detail.html";
  }
};
