
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  items: Array<{
    name: string;
    href?: string;
    active?: boolean;
  }>;
}

const BreadcrumbNav = ({ items }: BreadcrumbProps) => {
  return (
    <Breadcrumb className="max-w-4xl mx-auto px-4 pt-8 pb-2 text-gold/70">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbSeparator />
            {item.active ? (
              <BreadcrumbPage className="text-gold">{item.name}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
      
      {/* Données structurées pour le fil d'Ariane (BreadcrumbList) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://premiumautoclean.com/"
          },
          ...items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 2,
            "name": item.name,
            "item": item.href ? `https://premiumautoclean.com${item.href}` : undefined
          }))
        ]
      })} } />
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
