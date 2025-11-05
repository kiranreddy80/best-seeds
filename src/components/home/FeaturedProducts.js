import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Tiger Shrimp Seeds",
      price: "$46.50/kg",
      originalPrice: "$52.00/kg",
      image: "🦐",
      category: "Shrimp",
      rating: 4.8,
      reviews: 124,
      tags: ["Fast Growth", "Disease Resistant", "Best Seller"]
    },
    {
      id: 2,
      name: "Organic Tilapia Fish Seeds",
      price: "$31.75/kg",
      originalPrice: "$35.00/kg",
      image: "🐟",
      category: "Fish",
      rating: 4.6,
      reviews: 89,
      tags: ["Organic", "High Survival", "Fresh"]
    },
    {
      id: 3,
      name: "Freshwater Prawn Seeds",
      price: "$52.30/kg",
      originalPrice: "$58.00/kg",
      image: "🦐",
      category: "Prawn",
      rating: 4.9,
      reviews: 67,
      tags: ["Premium", "Large Size", "Limited Stock"]
    },
    {
      id: 4,
      name: "Carp Fish Seed Pack",
      price: "$28.90/kg",
      originalPrice: "$32.00/kg",
      image: "🐠",
      category: "Fish",
      rating: 4.5,
      reviews: 156,
      tags: ["Economical", "Easy Farming", "Popular"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Premium Seeds
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked quality seeds with guaranteed germination and expert support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Product Image */}
              <div className="bg-blue-50 p-8 text-center">
                <div className="text-6xl">{product.image}</div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <span>⭐</span>
                    <span className="text-sm font-semibold ml-1 text-gray-700">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-gray-800 mb-3">{product.name}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                
                {/* Action Button */}
                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition duration-300">
            View All Products (50+ Varieties)
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;