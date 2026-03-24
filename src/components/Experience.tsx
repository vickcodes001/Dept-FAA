import React from "react";

const Experience = () => {
  const venues = [
    {
      name: "Krannert Art Museum",
      description: "World-class collection of contemporary and historical art",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Krannert Center for the Performing Arts",
      description: "Premier venue for music, dance, and theatre performances",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "School of Art & Design Gallery",
      description: "Showcase student and faculty artwork and design projects",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Art & Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the vibrant arts scene through our world-class
            facilities and performances
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {venue.name}
                </h3>
                <p className="text-gray-600 mb-4">{venue.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Visit →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
