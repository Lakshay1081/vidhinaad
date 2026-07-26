import { ShieldCheck, BriefcaseBusiness, FileCheck, Scale } from "lucide-react";
import Container from "../layout/Container";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Legal Advisory",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Compliance",
  },
  {
    icon: FileCheck,
    title: "Documentation & Contracts",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
  },
];

function TrustStrip() {
  return (
    <section className="border-y border-[#E7E0D4] bg-[#F8F6F2]">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
          {items.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D57]/10">
                <Icon
                  size={22}
                  className="text-[#B08D57]"
                />
              </div>

              <h3 className="text-sm font-semibold text-[#0F172A]">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustStrip;