import Link from "next/link";
import Image from "next/image";

interface CaseStudyCardProps {
  industry: string;
  category?: string;
  title: string;
  outcome: string;
  href?: string;
  image: string;
  imageAlt: string;
}

export default function CaseStudyCard({
  industry,
  category,
  title,
  outcome,
  href = "#",
  image,
  imageAlt,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="card card--hover plate">
      <div className="plate__frame">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 1000px) 100vw, 33vw" />
      </div>
      <div className="plate__body">
        <div className="plate__meta">
          {category && <span className="plate__cat">{category}</span>}
          {category && <span aria-hidden="true">·</span>}
          <span>{industry}</span>
        </div>
        <h3 className="plate__title">{title}</h3>
        <p className="plate__outcome">{outcome}</p>
      </div>
    </Link>
  );
}
