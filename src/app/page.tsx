import { db } from '@/server/db';

const urls = [
  'https://utfs.io/f/ce49e071-59a9-4a20-a9a0-8432d604fc61-herpjl.webp',
  'https://utfs.io/f/263c71df-4d87-4cca-8788-1072d9b1728c-lqwsp1.jpg',
  'https://utfs.io/f/67321a9b-575b-4421-89df-c75de24269c1-ilen2j.jpg',
];

const mockImages = urls.map((url) => ({
  url,
}));

const placeholderImgs = Array(7).fill(mockImages)
  .flat()
  .map((image, index) => ({...image, id: index + 1}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany({});

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {placeholderImgs.map((image) => (
          <div
            key={image.id}
            className="w-48 h-48 aspect-[1] overflow-hidden">
              <img
                src={image.url}
                alt="image"
                className="w-full h-full object-cover"
              />
          </div>
        ))}
      </div>
    </main>
  );
}
