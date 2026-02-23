const projects = [
  {
    name: "Global Industry Projects",
    description: "Worked with multiple industries globally, serving US, UK, ASEAN region customers and collaborating across diverse work cultures.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="p-6 bg-gray-800 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-2 text-gray-400">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
