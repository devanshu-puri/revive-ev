export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#18191B] text-white p-10">
      <h1 className="text-4xl font-bold text-green-400 mb-8">Our Services</h1>
      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>EV Repair & Maintenance</li>
        <li>Mobile On-Demand Van</li>
        <li>Fleet Servicing</li>
        <li>Annual Maintenance Plans</li>
      </ul>
      <div className="mt-8 flex gap-4">
        <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition">
          Schedule a Repair
        </button>
        <button className="border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition">
          Talk to a Technician
        </button>
      </div>
    </main>
  );
}
