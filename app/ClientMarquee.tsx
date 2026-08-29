import Image from "next/image";

const logoClients = [
  {
    src: "/images/clients/ppra.svg",
    alt: "Public Procurement Regulatory Authority"
  },
  {
    src: "/images/clients/karachi-water.svg",
    alt: "Karachi Water and Sewerage Corporation"
  },
  {
    src: "/images/clients/kda.svg",
    alt: "Karachi Development Authority"
  },
  {
    src: "/images/clients/m-logo.svg",
    alt: "Client logo"
  },
  {
    src: "/images/clients/ad-associates.svg",
    alt: "A and D Associates"
  },
  {
    src: "/images/clients/rehmani.svg",
    alt: "Rehmani Group of Companies"
  },
  {
    src: "/images/clients/pdoha.svg",
    alt: "Pakistan Defence Officers Housing Authority"
  },
  {
    src: "/images/clients/kmc.svg",
    alt: "Karachi Metropolitan Corporation"
  },
  {
    src: "/images/clients/bahria-town.svg",
    alt: "Bahria Town"
  }
];

const nameClients = [
  "Indusmen Corporation",
  "Civil Consultant",
  "Sind Government Employees Cooperative Housing Society Ltd.",
  "R.M. Gulistan Engineers & Contractors",
  "Heryana Construction",
  "Al-Asif Sugar Mills Ltd.",
  "Co-operative Engineers Ltd.",
  "Irfan Limited",
  "Muhandaseen Limited",
  "Sultan Brothers Ltd.",
  "Karachi Port Trust",
  "Frontier Works Organization"
];

const clients = nameClients.flatMap((name, index) => [
  {
    type: "logo" as const,
    key: `logo-${index}`,
    ...logoClients[index % logoClients.length]
  },
  {
    type: "name" as const,
    key: `name-${index}`,
    name
  }
]);

function ClientItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="clients-set" aria-hidden={hidden || undefined}>
      {clients.map((client) =>
        client.type === "logo" ? (
          <span className="client-logo-card" key={client.key}>
            <Image
              src={client.src}
              alt={hidden ? "" : client.alt}
              width={150}
              height={50}
            />
          </span>
        ) : (
          <span className="client-name-card" key={client.key}>
            {client.name}
          </span>
        )
      )}
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section className="clients-marquee" aria-label="Clients">
      <div className="clients-head wrap">
        <span className="eyebrow">Trusted By</span>
        <h2>Clients We Have Served</h2>
      </div>
      <div className="clients-rail">
        <div className="clients-track">
          <ClientItems />
          <ClientItems hidden />
        </div>
      </div>
    </section>
  );
}
