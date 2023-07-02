import React from "react";
import { Helmet } from "react-helmet";

function Metatags() {
  return (
    <Helmet>
      <title>Ny Nivoarijaona - Website Developer</title>
      <meta name="title" content="Ny Nivoarijaona - Website Developer" />
      <meta
        name="description"
        content="A young boy passionate of IT and UI/UX. I'm a Developer Front End and a Web Designer too."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ny-nivoarijaona.com" />
      <meta property="og:title" content="Ny Nivoarijaona - Website Developer" />
      <meta
        property="og:description"
        content="A young boy passionate of IT and UI/UX. I'm a Developer Front End and a Web Designer too."
      />
      <meta property="og:image" content="src/images/face.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.ny-nivoarijaona.com" />
      <meta
        property="twitter:title"
        content="Ny Nivoarijaona - Website Developer"
      />
      <meta
        property="twitter:description"
        content="A young boy passionate of IT and UI/UX. I'm a Developer Front End and a Web Designer too."
      />
      <meta property="twitter:image" content="src/images/face.jpg" />
    </Helmet>
  );
}

export default Metatags;
