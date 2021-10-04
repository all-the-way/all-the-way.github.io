import React from "react";

const LocalBusinessRichResult = () => {
  const data = {
    "@id": "https://allthewaygym.se",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Djäknegatan 33",
      addressLocality: "Malmö",
      postalCode: "21135",
      addressCountry: "SE",
    },
    name: "All The Way Gym",
    geo: {
      latitude: 55.60393366609548,
      longitude: 13.004551830670133,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "23:00",
      },
    ],
    url: "https://allthewaygym.se",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `${JSON.stringify(data)}`,
      }}
    />
  );
};

export default LocalBusinessRichResult;
