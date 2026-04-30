const reviews = [
  {
    name: "Sandra M.",
    initials: "SM",
    date: "March 2025",
    rating: 5,
    text: "Dr. Hornaman is absolutely wonderful. I came in with severe lower back pain that had been bothering me for months, and after just a few sessions I felt like a completely different person. He takes the time to listen and explain everything. Highly recommend!",
  },
  {
    name: "Kevin T.",
    initials: "KT",
    date: "January 2025",
    rating: 5,
    text: "After my car accident I was in a lot of pain and didn't know where to turn. A friend referred me to Dr. Hornaman and I'm so glad they did. He treated my whiplash and neck injury with care and professionalism. The whole staff is friendly and welcoming.",
  },
  {
    name: "Linda R.",
    initials: "LR",
    date: "November 2024",
    rating: 5,
    text: "I've been a patient for over 10 years and Dr. Hornaman never disappoints. My sciatica used to sideline me for days at a time. With regular adjustments and his guidance on stretching, I now manage it very well. He truly cares about his patients.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.372 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.952 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-green font-semibold text-sm uppercase tracking-widest mb-2">
            Patient Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating count={5} />
            <span className="text-white/70 text-sm">5.0 · Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-6 flex flex-col gap-4 shadow-lg">
              {/* Google G icon + stars */}
              <div className="flex items-center justify-between">
                <StarRating count={r.rating} />
                <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{r.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
