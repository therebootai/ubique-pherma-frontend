const AboutUs = () => {
  const content = [
    {
      heading: "Nature of Business",
      desc: "Marketing, Third Party Manufacturers, Exporters, Wholesaler, Trader, Distributor",
    },
    {
      heading: "Number of Employees",
      desc: "50+",
    },
    {
      heading: "Year of Establishment",
      desc: "2012",
    },
    {
      heading: "Incorporation No",
      desc: "U47721WB2023PTC260267",
    },
  ];
  const points = [
    {
      title: "Innovation",
      desc: "Science is the foundation of Ubique Pharma. Our field teams maintain strong connections with doctors and patients, fostering innovative ideas and solutions that address market needs while creating synergies across various therapeutic areas.",
      color: "defined-blue",
    },
    {
      title: "Responsibility",
      desc: "In the near future, we plan to establish the UBIQUE as Welfare Foundation to contribute to the well-being of society. Our goal is to support underprivileged communities while also actively engaging in Corporate Social Responsibility (CSR) initiatives, creating a meaningful and lasting impact in future.",
      color: "defined-orange",
    },
    {
      title: "Quality",
      desc: "We collaborate with state-of-the-art manufacturing facilities and laboratories to ensure the highest quality standards for our products, prioritizing patient safety above all else. Our dedicated quality personnel oversee every stage of production, safeguarding compliance with drug safety and regulatory standards. Our products adhere to WHO guidelines and certifications, including FSSAI, GMP, FDA, GLP, HACCP, ISO 9001:2015 and ISO 22000:2018 certification, ensuring they meet market demands and industry benchmarks. We also offer the latest DCGIapproved molecules to our customers. We are committed to delivering excellence by continuously listening to our customers, understanding their expectations, and consistently meeting their needs with high-quality products and services.",
      color: "defined-blue",
    },
    {
      title: "Efficacy",
      desc: "At Ubique Pharma, efficacy stands as the cornerstone of our product policy. We are unwavering in our commitment to delivering high-quality pharmaceutical solutions that ensure optimal therapeutic outcomes. Every product we develop undergoes rigorous research, advanced formulation techniques, and stringent quality control measures to uphold the highest efficacy standards. We adhere to internationally recognized certifications, including WHO, GMP, FDA, FSSAI, GLP, HACCP, ISO 9001:2015 and ISO 22000:2018 certification, ensuring that each product meets and exceeds regulatory benchmarks. Our commitment to efficacy begins at the research and development stage, where we integrate cutting-edge scientific advancements and the latest DCGI-approved molecules to enhance treatment effectiveness. We believe that efficacy is directly linked to quality and safety. Our dedicated quality assurance team closely monitors every stage of production, from sourcing raw materials to the final product, to guarantee consistency, stability, and superior performance. We work in collaboration with top-tier laboratories and manufacturing units equipped with stateof-the-art technology, ensuring that our products deliver the intended therapeutic benefits without compromise. At the heart of our mission is the well-being of patients. We actively engage with healthcare professionals, researchers, and consumers to continuously improve our formulations based on clinical feedback and emerging medical needs. This patient-centric approach allows us to introduce innovative solutions that enhance treatment outcomes and improve overall health. Commitment to Continuous Innovation to maintain our promise of efficacy, we consistently invest in research, development, and technology to stay ahead of evolving healthcare challenges. Our scientific teams explore new molecules, advanced drug delivery systems, and bioavailability enhancement techniques to provide more effective and targeted treatment options. At Ubique Pharma, Efficacy Is Not Just A Goal—It Is A Responsibility. We never compromise on this fundamental principle, ensuring that every product we offer is backed by science, innovation, and an unwavering dedication to improving lives.",
      color: "defined-orange",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-defined-brown text-4xl font-semibold">About Us</h1>
      <p>
        Ubique Pharma Pvt. Ltd. is a rapidly growing pharmaceutical company
        engaged in a diverse range of businesses, including the marketing,
        export, and supply of pharmaceutical products, nutraceutical
        supplements, and third-party manufacturing services both domestically
        and internationally. We are committed to providing products of the
        highest quality and efficacy, sourced from facilities certified by WHO,
        GMP, ISO 9001:2015 and ISO 22000:2018 certification. These facilities
        are operated by a highly skilled and knowledgeable team dedicated to
        adhering to rigorous quality systems, ensuring the delivery of
        world-class products that meet global standards. Our commitment to
        excellence extends beyond manufacturing, as we continuously strive to
        meet the evolving needs of the healthcare industry. We prioritize
        innovation, sustainability, and customer satisfaction, making sure our
        products are not only effective but also safe for all users. With a
        strong focus on research and development, we aim to introduce new and
        advanced solutions that enhance well-being worldwide. Ubique Pharma Pvt.
        Ltd. is poised to continue expanding its global footprint, building
        long-term partnerships, and contributing to the global healthcare
        landscape through quality and innovation.
      </p>

      <h1 className="text-defined-brown text-4xl font-semibold">
        Our Mission and Vision
      </h1>
      <p>
        Our vision is to be a leading global pharmaceutical company, recognized
        for our commitment to excellence in product quality, innovation, and
        customer satisfaction. We aspire to create a healthier world by offering
        cutting-edge healthcare solutions, expanding access to essential
        medicines, and fostering sustainable growth in the pharmaceutical
        industry. We aim to build strong, long-lasting partnerships and make a
        meaningful impact on global health. Our mission is to enhance global
        health by providing high-quality, affordable pharmaceutical products and
        nutraceutical supplements. We aim to deliver safe, effective, and
        innovative healthcare solutions that improve the well-being of
        individuals worldwide. Through continuous research, development, and
        collaboration, we strive to meet the evolving needs of our customers
        while maintaining the highest standards of quality and integrity.
      </p>

      <h1 className="text-defined-brown text-4xl font-semibold">
        Our Key Points:
      </h1>
      {points.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className={`flex justify-center items-center text-2xl text-white rounded w-full md:w-[20%] p-4 bg-${item.color}`}>
            {item.title}
          </div>
          <p>{item.desc}</p>
        </div>
      ))}

      <div className="w-full h-full border flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-[40%] border">
          {content.map((item, index) => (
            <div key={index} className="border p-4">
              <h1 className="text-defined-brown text-xl font-semibold">
                {item.heading}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 lg:w-[60%] border">
          {content.map((item, index) => (
            <div key={index} className="border p-4">
              <p className="text-defined-brown text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
