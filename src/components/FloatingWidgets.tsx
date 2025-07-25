// src/components/FloatingWidgets.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const FloatingWidgets = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Path relatif karena file SVG ada di folder yang sama
  const widgets = [
    {
      name: "WhatsApp",
      icon: "./whatsapp.svg",
      color: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/6281234567890?text=Halo%20Raja%20Freeze%20Dried%20Food,%20saya%20tertarik%20dengan%20produk%20Anda",
    },
    {
      name: "Shopee",
      icon: "./shopee.svg",
      color: "bg-orange-500 hover:bg-orange-600",
      link: "https://shopee.co.id/rajafreezdriedfood",
    },
    {
      name: "Tokopedia",
      icon: "./tokped.svg",
      color: "bg-green-600 hover:bg-green-700",
      link: "https://tokopedia.com/rajafreezdriedfood",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Individual widget buttons */}
        {widgets.map((widget, index) => (
          <div
            key={widget.name}
            className={`transform transition-all duration-300 ease-in-out ${
              isExpanded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-95 pointer-events-none"
            }`}
            style={{
              transitionDelay: isExpanded ? `${index * 100}ms` : "0ms",
            }}
          >
            <a
              href={widget.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-all duration-200 transform hover:scale-110 ${widget.color}`}
              title={`Hubungi kami di ${widget.name}`}
            >
              <Image
                src={widget.icon}
                alt={`${widget.name} Icon`}
                width={24}
                height={24}
                className="text-white"
              />
            </a>
          </div>
        ))}

        {/* Main toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
          title="Hubungi Kami"
        >
          <span
            className={`text-2xl transition-transform duration-300 ${
              isExpanded ? "rotate-45" : "rotate-0"
            }`}
          >
            {isExpanded ? "✕" : "📞"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingWidgets;