import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";

export default async function Home() {
  const res = await fetch(
    "https://gist.githubusercontent.com/judygab/f34636c6195db777bcf2080287bfda01/raw/96d1e8b61a78709a590f488a1872eb78216bd41a/listingsData.json",
    {
      cache: "force-cache",
    },
  );
  const exploreData = await res.json();

  const res2 = await fetch("https://jsonkeeper.com/b/VHHT", {
    cache: "force-cache",
  });

  const cardsData = await res2.json();
  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section>
          {" "}
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} image={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists Curated By AIrbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}
