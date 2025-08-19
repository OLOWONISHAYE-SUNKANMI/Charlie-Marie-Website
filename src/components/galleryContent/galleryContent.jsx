import React, { useState } from 'react';

const sections = [
  { label: 'Pre School', value: 'pre' },
  { label: 'Nursery', value: 'nursery' },
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
  { label: 'Vocational', value: 'vocational' },
  { label: 'Sport Academy', value: 'sport' },
  {label: 'Event', value: 'event'}
];

const images = [

// PRE-SCHOOL SECTION 
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0097_vhjezw.jpg', section: 'pre' },
  { src: '', section: 'pre' },
  { src: '', section: 'pre' },
  { src: '', section: 'pre' },
  { src: '', section: 'pre' },
  { src: '', section: 'pre' },
  { src: '', section: 'pre' },

// NURSERY SECTION 
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0099_uzxczu.jpg', section: 'nursery' },

// PRIMARY SECTION
  { src: '', section: 'primary' },


// SECONDARY SECTION
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0067_cxnjtq.jpg', section: 'secondary' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517520/IMG-20250812-WA0070_nfbeex.jpg', section: 'secondary' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0098_et6wez.jpg', section: 'secondary' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0096_yik0ka.jpg', section: 'secondary' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517515/IMG-20250812-WA0082_yggbdb.jpg', section: 'vocational' },  
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517515/IMG-20250812-WA0080_wfzet3.jpg', section: 'vocational' },

  // SPORT ACADEMY
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613936/IMG-20250812-WA0044_ksncfo.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613937/IMG-20250812-WA0038_ynqhfa.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613936/IMG-20250812-WA0034_t3z89f.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613936/IMG-20250812-WA0043_kvyoye.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613933/IMG-20250812-WA0029_xcrypd.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613933/IMG-20250812-WA0030_zgbcyk.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613936/IMG-20250812-WA0034_t3z89f.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613936/IMG-20250812-WA0039_c2vi1o.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613932/WhatsApp_Image_2025-08-12_at_05.51.48_91840951_mcfqnt.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613932/IMG-20250812-WA0027_ujxzoc.jpg', section: 'sport' },
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613932/WhatsApp_Image_2025-08-12_at_05.51.48_897f1bc7_u8axpx.jpg', section: 'sport' },  
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613931/IMG-20250812-WA0028_zifyom.jpg', section: 'sport' }, 
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613931/IMG-20250812-WA0026_njfmar.jpg', section: 'sport'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613934/IMG-20250812-WA0033_w32ge4.jpg', section: 'sport'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755613932/WhatsApp_Image_2025-08-12_at_05.51.48_897f1bc7_u8axpx.jpg', section: 'sport'},
  

// EVENTS
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517514/IMG-20250812-WA0056_kfk2of.jpg', section: 'event'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517514/IMG-20250812-WA0047_stopxe.jpg', section: 'event'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517514/IMG-20250812-WA0055_eq0er2.jpg', section: 'event'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517511/IMG-20250812-WA0053_mubrux.jpg', section: 'event'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517511/IMG-20250812-WA0049_s1a3na.jpg', section: 'event'},
  { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517511/IMG-20250812-WA0051_xaoemi.jpg', section: 'event'},
   { src: 'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517511/IMG-20250812-WA0050_s0uuel.jpg', section: 'event'},
  // Add more images as needed
];

export default function GalleryContent() {
  const [selected, setSelected] = useState('pre');

  const filteredImages = images.filter(img => img.section === selected);

  return (
    <div className="w-full py-10">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {sections.map(sec => (
          <button
            key={sec.value}
            className={`px-4 py-2 rounded font-bold transition-colors
              ${selected === sec.value ? 'bg-[#115237] text-white' : 'bg-gray-200 text-[#115237] hover:bg-[#620000] hover:text-white'}`}
            onClick={() => setSelected(sec.value)}
          >
            {sec.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredImages.length > 0 ? (
          filteredImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.section}
              className="w-4/5 h-64 object-cover mx-10 my-5"
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No images for this section.</p>
        )}
      </div>
    </div>
  );
}