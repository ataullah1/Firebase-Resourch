const Home = () => {
  return (
    <div className="">
      {/* Banner Section */}
      <section className="min-h-[calc(100vh-92px)] flex items-center justify-center bg-red-200 p-14">
        <div className="w-full mx-auto text-center flex items-center">
          <h1 className="w-1/2 text-4xl font-semibold">Welcome to Our Store</h1>
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual banner image
            alt="Banner"
            className=" h-auto mb-4 w-1/2"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-14">
        <div className="mx-auto">
          <h2 className="py-5 text-5xl text-center font-semibold mb-4">
            Featured Products
          </h2>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            <div className="">
              {/* Product Cards (Repeat for each product) */}
              {/* Example Product Card */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://via.placeholder.com/200" // Replace with actual product image
                  alt="Product"
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-600">$99.99</p>
              </div>
              {/* Repeat for other products */}
            </div>
            <div className="">
              {/* Product Cards (Repeat for each product) */}
              {/* Example Product Card */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://via.placeholder.com/200" // Replace with actual product image
                  alt="Product"
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-600">$99.99</p>
              </div>
              {/* Repeat for other products */}
            </div>
            <div className="">
              {/* Product Cards (Repeat for each product) */}
              {/* Example Product Card */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://via.placeholder.com/200" // Replace with actual product image
                  alt="Product"
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-600">$99.99</p>
              </div>
              {/* Repeat for other products */}
            </div>
            <div className="">
              {/* Product Cards (Repeat for each product) */}
              {/* Example Product Card */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://via.placeholder.com/200" // Replace with actual product image
                  alt="Product"
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-600">$99.99</p>
              </div>
              {/* Repeat for other products */}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-8 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* Category Cards (Repeat for each category) */}
            {/* Example Category Card */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/100" // Replace with actual category image
                alt="Category"
                className="w-12 h-12 object-cover mb-2"
              />
              <h3 className="text-md font-semibold">Clothing</h3>
            </div>
            {/* Repeat for other categories */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
