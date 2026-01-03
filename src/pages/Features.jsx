const features = [
  "IP68 Waterproof",
  "30-Day Battery Life",
  "Long-Range Connectivity",
  "One-Touch SOS",
  "Accessibility Focused Design",
];

export default function Features() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div
          key={feature}
          className="p-6 border border-white/10 rounded-xl"
        >
          {feature}
        </div>
      ))}
    </div>
  );
}
