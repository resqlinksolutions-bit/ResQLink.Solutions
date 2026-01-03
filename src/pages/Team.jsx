const team = [
  { name: "Drakshi Meshram", role: "CEO" },
  { name: "Shagun Jha", role: "COO" },
  { name: "Dhruv Mankar", role: "CTO" },
  { name: "Ansh Padole", role: "Head of R&D" },
  { name: "Ashvat Yadav", role: "CDO" },
  { name: "Arnav Bodas", role: "CMO" },
];

export default function Team() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {team.map((member) => (
        <div
          key={member.name}
          className="p-6 border border-white/10 rounded-xl"
        >
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-400">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
