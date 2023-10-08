let skip = 0;
async function get_products() {
    const respons = await fetch(`https://dummyjson.com/products?skip=${skip}`);
    const json = await respons.json();
    console.log(json);

    show_totals(json);
    display_products(json);

    skip += json.limit;
}

function show_totals(products) {
    const total_box = document.getElementById("total_box");

    total_box.innerHTML = `Products shown: ${products.limit + products.skip} - Total products: ${products.total}`;
}

function display_products(products) {

    for (const product of products.products) {
        if (!category_exists(product.category)) {
            create_category(product.category);
        }
        add_product(product);
    }

}

function category_exists(category) {
    return document.getElementById(`category_${category}`) !== null;
}

function create_category(category) {
    const categories_box = document.getElementById("categories_box");
    categories_box.innerHTML += `
    <h2>${category}</h2>
    <table border="1">
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Description</th>
        <th>Brand</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody id="category_${category}"></tbody>
  </table>`;
}

function add_product(product) {
    const category = document.getElementById(`category_${product.category}`);

    category.innerHTML += `<tr>
    <td><img src="${product.thumbnail}"></td>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.brand}</td>
    <td>${product.price}</td>
    </tr>`;
}