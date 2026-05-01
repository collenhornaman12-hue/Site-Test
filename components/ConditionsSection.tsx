import {
  Activity,
  Brain,
  Zap,
  AlertCircle,
  Wind,
  Car,
  Dumbbell,
  MoveHorizontal,
} from "lucide-react";

const conditions = [
  {
    icon: Activity,
    title: "Back Pain",
    description: "Upper, mid, and lower back — acute and chronic",
  },
  {
    icon: MoveHorizontal,
    title: "Neck Pain",
    description: "Stiffness, soreness, and reduced range of motion",
  },
  {
    icon: Brain,
    title: "Headaches",
    description: "Tension headaches and cervicogenic migraines",
  },
  {
    icon: Zap,
    title: "Sciatica",
    description: "Radiating pain from lower back into the legs",
  },
  {
    icon: AlertCircle,
    title: "Herniated Disc",
    description: "Bulging or ruptured discs causing nerve compression",
  },
  {
    icon: Car,
    title: "Whiplash",
    description: "Neck and shoulder injuries from sudden impact",
  },
  {
    icon: Dumbbell,
    title: "Shoulder Pain",
    description: "Rotator cuff strain, bursitis, and impingement",
  },
  {
    icon: Wind,
    title: "Hip Pain",
    description: "Hip flexor tightness, bursitis, and joint dysfunction",
  },
];

export default function ConditionsSection() {
  return (
    <section id="conditions" className="py-20 px-4 sm:px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-green font-semibold text-sm uppercase tracking-widest mb-2">
            We Can Help With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Conditions We Treat
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditions.map((condition) => {
            const Icon = condition.icon;
            return (
              <div
                key={condition.title}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-yellow-green/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-yellow-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-1">
                  {condition.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {condition.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
