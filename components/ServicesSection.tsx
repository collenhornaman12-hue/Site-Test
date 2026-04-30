const services = [
  {
    icon: "🦴",
    title: "Chiropractic Adjustments",
    description:
      "Precise spinal manipulation to restore proper alignment, relieve nerve pressure, and eliminate pain at its source.",
  },
  {
    icon: "↔️",
    title: "Spinal Decompression",
    description:
      "Non-surgical traction therapy to gently stretch the spine and relieve pressure on compressed discs and nerves.",
  },
  {
    icon: "🤲",
    title: "Massage Therapy",
    description:
      "Therapeutic massage to release muscle tension, improve circulation, and complement your chiropractic treatment.",
  },
  {
    icon: "🏃",
    title: "Sports Injury Treatment",
    description:
      "Specialized rehabilitation for athletes — from weekend warriors to professionals — to recover fast and prevent re-injury.",
  },
  {
    icon: "🚗",
    title: "Auto Accident Recovery",
    description:
      "Targeted care for whiplash and soft-tissue injuries following motor vehicle accidents, with documentation support.",
  },
  {
    icon: "🧍",
    title: "Posture Correction",
    description:
      "Corrective exercises and adjustments to address forward head posture, rounded shoulders, and chronic postural strain.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-green font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-yellow-green/30 transition-all group"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-yellow-green-dark transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
