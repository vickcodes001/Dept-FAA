const News = () => {
  const newsArticles = [
    {
      title: "New Exhibition Showcases Student Art",
      date: "March 15, 2024",
      excerpt:
        "The Krannert Art Museum opens its doors to an extraordinary collection of student artwork from across all departments.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Alumni Wins National Design Award",
      date: "March 10, 2024",
      excerpt:
        "Recent graduate Sarah Chen receives the prestigious AIGA Design Award for her innovative sustainable design project.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Theatre Department Presents New Season",
      date: "March 5, 2024",
      excerpt:
        "The Department of Theatre announces an exciting lineup of contemporary and classic productions for the upcoming season.",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings in our creative community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block">
                  {article.date}
                </time>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
