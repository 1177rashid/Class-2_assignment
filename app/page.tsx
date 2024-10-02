import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Below Code Is With Tailwind */}
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hi,
          <br />
          My Name is <span className="pinkColor">Rashid</span>
          <br />I am Next JS Developer
        </div>
        <div><img src="https://a.storyblok.com/f/172506/1292x552/7cc19cf257/nextjs-benefits-cover-image.webp"></img></div>
      </div>
    </>
  );
}
