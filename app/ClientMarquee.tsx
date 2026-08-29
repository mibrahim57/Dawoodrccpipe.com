const clients = [
  "Public Procurement Regulatory Authority (PPRA)",
  "Karachi Water & Sewerage Corporation",
  "Karachi Development Authority (KDA)",
  "Maqbool Associates",
  "Indusmen Corporation",
  "Civil Consultants",
  "A&D Associates",
  "Sindh Government Employees Cooperative Housing Society Limited",
  "R.M. Gulistan Engineers & Contractors",
  "Rehmani Group of Companies",
  "Burki Constructions",
  "Heryana Construction",
  "Al-Asif Sugar Mills Limited",
  "Co-operative Engineers Limited",
  "Irfan Limited",
  "Sultan Brothers Limited",
  "Pakistan Defence Officers Housing Authority, Karachi",
  "Bahria Town",
  "Karachi Metropolitan Corporation",
  "Karachi Port Trust",
  "Frontier Works Organization"
];

function ClientItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="client-marquee-set" aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <span className="client-marquee-name" key={client}>
          {client}
        </span>
      ))}
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section id="clients" className="client-marquee-section" aria-label="Clients">
      <div className="client-marquee-head wrap">
        <span className="eyebrow">Trusted By</span>
        <h2>Our Clients</h2>
      </div>
      <div className="client-marquee-rail">
        <div className="client-marquee-track">
          <ClientItems />
          <ClientItems hidden />
        </div>
      </div>
    </section>
  );
}
