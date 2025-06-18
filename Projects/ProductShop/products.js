//to Initialize an empty array to hold all the products fetched from the API.
let allProducts = [];

/*let product_container = document.createElement("div")
let p = document.createElement("p").appendChild(document.createTextNode("one"))*/

/*to make an API call to get product data.Converts the response to JSON.Saves the result to allProducts.
to  Call displayProducts() to render the products on the page.*/
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(res => {
    allProducts = res;
    displayProducts(allProducts);
  });

//to Clears the container with id data.to Loops through each product in the products array and calls addProduct() to render it.
function displayProducts(products) {
  const mother = document.getElementById("data");
  mother.innerHTML = ""; // clear previous
  products.forEach(addProduct);
}

//Creates individual DOM elements for each product attribute.
function addProduct(data){
 // Create individual elements
    let product_id = document.createElement("h4")
    let product_title = document.createElement("h5")
    let product_price = document.createElement("h5")
    let product_description = document.createElement("p")
    let product_category = document.createElement("p")
    let product_image = document.createElement("img")
    let product_rate = document.createElement("p")
    let product_count = document.createElement("p")

    // Add class names. product_id.className = "product_id"
    product_title.className = "product_title cinzel-500"
    product_price.className = "product_price"
    product_description.className = "product_description lora-500"
    product_category.className = "product_category"
    product_image.className = "product_image"
    product_rate.className = "product_rate  lora-700"
    product_count.className = "product_count lora-700"

    //Populate elements with data.Fills the created elements with product information. Basically assigning data
    product_title.innerHTML = data.title
    product_price.innerHTML ="USD: "+ data.price
    product_description.appendChild(document.createTextNode(data.description))
    product_category.appendChild(document.createTextNode(data.category))
    product_image.src = data.image
    product_rate.appendChild(document.createTextNode("Rate: " + data.rating.rate))
    product_count.appendChild(document.createTextNode("Votes: " + data.rating.count)) 

    // Structuring HTML Blocks:Create a container for the product.Creates container divs for organizing the layout.
    let mother = document.getElementById("data")
    let product_div = document.createElement("div")
    let product_rating = document.createElement("div")
    let image_div = document.createElement("div")

    // Assigning class names to the containers for styling. Adds classes and IDs for layout styling.
    product_div.className = "product_div"
    product_div.id = "product_div"
    product_rating.className = "product_rating"
    image_div.className = "image_div"

    // Appending elements into structured divs.
    product_div.appendChild(product_title)
    image_div.appendChild(product_image)
    product_div.appendChild(image_div)
    product_div.appendChild(product_price)
    product_div.appendChild(product_category)
    product_rating.appendChild(product_rate)
    product_rating.appendChild(product_count)
    product_div.appendChild(product_description)
    product_div.appendChild(product_rating)
    mother.appendChild(product_div)

    // Clickable Product for Detail Page: Adding click event to the product_div to redirect to product.html with the 
    // product ID, enabling a detail view for each product.
   /* (below commented out is the version where i currently was attaching the click event listener to the entire 
    product card (product_div), which makes everything inside it—including the title, description, etc.—clickable.And 
    Solution is to : Attach the Click Event Only to the Image which i will proceed and do it below)
    product_div.addEventListener('click', () => {
  window.location.href = "product.html?id=" + data.id;
  });
*/
product_image.addEventListener('click', (e) => {
  e.stopPropagation(); // prevents bubbling if image is nested
  window.location.href = "product.html?id=" + data.id;
});
}