    import Image from 'next/image';
    import Link from 'next/link';

    interface ProjectCardProps {
      slug: string;
      title: string;
      description: string;
      imageUrl: string;
    }

    export default function ProjectCard({ slug, title, description, imageUrl }: ProjectCardProps) {
      return (
        <Link href={`/projects/${slug}`} className="block group">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600">{description}</p>
        </Link>
      );
    }
    
