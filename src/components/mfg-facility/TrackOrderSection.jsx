import Image from "next/image";
import { useState } from "react";

const TrackOrderSection = () => {
  const img = [
    { icon: "/mfg/dtd.png" },
    { icon: "/mfg/bd.png" },
    { icon: "/mfg/del.png" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {img.map((item, index) => (
          <div
            key={index}
            className="relative"
            onClick={() => openModal(item.icon)}
          >
            <Image
              src={item.icon}
              alt="mfg-img"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 w-full h-full bg-black opacity-0 hover:opacity-50 hover:cursor-pointer transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-all duration-700"
          onClick={closeModal}
        >
          <div className="relative w-[90%] max-w-2xl p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-5 text-white text-5xl font-bold hover:text-defined-orange"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TrackOrderSection;
