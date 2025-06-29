import Marquee from "react-fast-marquee";

const Brand = () => {
   const companyLogo = [
      {
         name: "Slack",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-03-140x100.png",
      },
      {
         name: "Framer",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-04-140x100.png",
      },
      {
         name: "Netflix",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-01-140x100.png",
      },
      {
         name: "Google",
         image:
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
      },
      {
         name: "LinkedIn",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-05-140x100.png",
      },
      {
         name: "Facebook",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-04-140x100.png",
      },
      {
         name: "Facebook",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-04-140x100.png",
      },
      {
         name: "Google",
         image:
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
      },
      {
         name: "LinkedIn",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-05-140x100.png",
      },
      {
         name: "Facebook",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-04-140x100.png",
      },
      {
         name: "Facebook",
         image:
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/manufacturer/brand-logo-04-140x100.png",
      },
   ];

   return (
      <div className="py-10 bg-white">
         <div className="container mx-auto">
            <Marquee speed={50} pauseOnHover gradient={false}>
               {companyLogo.map((company, index) => (
                  <div
                     key={index}
                     className="w-40 h-20 flex items-center justify-center px-4"
                  >
                     <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                        draggable={false}
                     />
                  </div>
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default Brand;
