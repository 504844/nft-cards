import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryTabs from "./components/CategoryTabs";
import Nfts from "./components/Nfts";

import NftData from "./nftData";
import ContentData from "./contentData";
import CategoryData from "./categories";

import { Container, Row } from "react-bootstrap";

function App() {
  const nfts = NftData.map((nft) => {
    return <Nfts key={nft.id} item={nft} />;
  });
  const heroContent = ContentData.map((heroContent) => {
    return <Hero key={heroContent.id} item={heroContent} />;
  });
  const categoryTabs = CategoryData.map((category) => {
    return <CategoryTabs key={category.id} item={category} />;
  });
  return (
    <div className="root">
      <Navbar />
      <Container>
        {heroContent}
        <ul className="mb-3 nav nav-tabs nav-fill" role="tablist">
          {categoryTabs}
        </ul>
        <section className="cards-list">
          <Row>{nfts}</Row>
        </section>
      </Container>
    </div>
  );
}

export default App;
