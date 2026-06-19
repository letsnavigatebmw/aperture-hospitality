export default function PodcastsMedia() {
  const mainContent = {
    title: 'Insights on Strategy, Operations, and Building for Scale',
    platform: 'YouTube',
    url: 'https://www.youtube.com/@BrandonMWeaver/videos',
  }

  const featured = [
    {
      title: "It's Not Happening to You, It's Happening for You",
      platform: 'YouTube',
      url: 'https://youtube.com/shorts/MvYFAvVDfZ8',
    },
    {
      title: 'Moving Prospects from Indifference to Engagement',
      platform: 'YouTube',
      url: 'https://youtube.com/shorts/AckWa5ML22w',
    },
    {
      title: 'The World Doesn\'t Reward Talent',
      platform: 'YouTube',
      url: 'https://youtube.com/shorts/S7OGIjX4rLc',
    },
    {
      title: 'Opportunity Moves at The Speed of Connectivity',
      platform: 'YouTube',
      url: 'https://youtube.com/shorts/DvXgIrExZkA',
    },
  ]

  return (
    <section id="podcasts-media" className="border-b border-rule">
      <div className="container-max py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label">Featured Content</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            Featured <em className="italic">Podcasts & Media</em>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* Main Content Card */}
        <a
          href={mainContent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-12 border-2 border-brass rounded-lg p-8 bg-parchment-dark hover:bg-parchment hover:border-brass-dim transition-all"
        >
          <p className="text-brass font-bold uppercase tracking-widest text-xs mb-4">
            Featured
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-normal text-ink mb-4">
            {mainContent.title}
          </h3>
          <p className="text-muted text-sm">
            {mainContent.platform}
          </p>
        </a>

        {/* Featured Shorts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-rule rounded-lg p-6 bg-parchment-dark hover:border-brass hover:bg-parchment transition-all"
            >
              <p className="text-brass font-bold uppercase tracking-widest text-xs mb-3">
                {item.platform}
              </p>
              <h4 className="font-display text-base font-normal text-ink mb-4 leading-tight">
                {item.title}
              </h4>
              <p className="text-brass text-xs font-medium uppercase tracking-wider">
                Watch →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
