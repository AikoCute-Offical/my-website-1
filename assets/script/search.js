// Find an element includes any word of keyword
function calcRecordIncludesKeyword(keywordArr, productArr) {
  const resultArr = [];

  productArr.forEach((product) => {
    const search = `${product.name.toLowerCase()} ${product.des.toLowerCase()}`;
    var contain = true;
    keywordArr.forEach((keyword) => {
      if (contain === true) {
        if (!search.includes(keyword.toLowerCase())) contain = false;
        return;
      }
    });

    if (contain) {
      if (!resultArr.find((result) => result.id === product.id)) {
        resultArr.push(product);
      }
    }
  });

  return resultArr;
}
$(".search-input").oninput = (e) => {
  if (e.target.value?.trim()?.toLowerCase()) {
    // renderProductData = productData.filter((product) => {
    //   return (
    //     product.name.toLowerCase().includes(e.target.value) ||
    //     product.des.toLowerCase().includes(e.target.value)
    //   );
    // });

    renderProductData = calcRecordIncludesKeyword(
      e.target.value.trim().split(" "),
      productData
    );
    renderProductlist(renderProductData);
    genPagination(renderProductData.length);
  } else {
    renderProductlist(productData);
    genPagination(productData.length);
  }
};
