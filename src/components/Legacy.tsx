const Legacy = () => {
  const figures = [
    {
      name: "Ludwig Mies van der Rohe",
      title: "Former Director of Architecture",
      description:
        "Pioneering modernist architect who shaped the Bauhaus movement",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Mahalia Jackson",
      title: "Alumna, School of Music",
      description:
        "Legendary gospel singer who performed at the 1963 March on Washington",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legacy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the visionaries and artists who have shaped our
            institution
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {figures.map((figure, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={figure.image}
                alt={figure.name}
                className="w-full md:w-48 h-64 md:h-48 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {figure.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{figure.title}</p>
                <p className="text-gray-600">{figure.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
