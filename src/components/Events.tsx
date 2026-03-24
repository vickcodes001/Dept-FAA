const Events = () => {
  const upcomingEvents = [
    {
      title: "Spring Arts Festival",
      date: "April 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Krannert Center",
      description:
        "A celebration of creativity featuring performances, exhibitions, and workshops from all departments.",
    },
    {
      title: "Architecture Lecture Series",
      date: "April 20, 2024",
      time: "7:00 PM",
      location: "Temple Hoyne Buell Hall",
      description:
        "Renowned architect Maya Lin discusses sustainable design and community impact.",
    },
    {
      title: "Music Department Recital",
      date: "April 25, 2024",
      time: "8:00 PM",
      location: "Smith Hall",
      description:
        "Student composers and performers showcase original works and classical repertoire.",
    },
    {
      title: "Design Thinking Workshop",
      date: "May 2, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Art & Design Building",
      description:
        "Interactive workshop exploring innovative design processes and creative problem-solving.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting performances, lectures, and creative
            experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {event.time}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
