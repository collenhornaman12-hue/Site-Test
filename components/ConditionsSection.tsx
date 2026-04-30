const conditions = [
  { name: "Back Pain", detail: "Upper, mid, and lower back — acute and chronic" },
  { name: "Neck Pain", detail: "Stiffness, soreness, and reduced range of motion" },
  { name: "Headaches", detail: "Tension headaches and cervicogenic migraines" },
  { name: "Sciatica", detail: "Radiating pain from lower back into the legs" },
  { name: "Herniated Disc", detail: "Bulging or ruptured discs causing nerve compression" },
  { name: "Whiplash", detail: "Neck and shoulder injuries from sudden impact" },
  { name: "Shoulder Pain", detail: "Rotator cuff strain, bursitis, and impingement" },
  { name: "Hip Pain", detail: "Hip flexor tightness, bursitis, and joint dysfunction" },
];

export default function ConditionsSection() {
  return (
    <section id="conditions" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-green font-semibold text-sm uppercase tracking-widest mb-2">
            We Can Help With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Conditions We Treat
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl p-5 border-l-4 border-yellow-green shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-yellow-green flex-shrink-0" />
                <h3 className="font-bold text-navy text-base">{c.name}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-snug pl-4">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
