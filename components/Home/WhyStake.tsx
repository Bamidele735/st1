import React from "react";
import Link from "next/link";
import NFTIMG from "../../public/media/Amy  Seven Riches_ Four Churches 4 of 19.png"
import Image from "next/image";
export default function Whystake() {
  return (
    <div
      className="container why_us "
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="rowx">
        <section className=" col50">
          <div></div>
          <Image src={NFTIMG} alt="nft" width={400} />
        </section>
        <section className=" col50 Whystake">
          <div className=" effect  ">
            <div className="">
              <header>Why stake GREAT FLOWERS NFTS</header>
              <h2>
                Stake Your $GTE for <span>Passive Income</span>
              </h2>

              <p className="pb-4">
              "Flowers on a Wednesday".Flower delivery fast and NFTs forever.  Limited editions from 
          "Flowers and Tigers and Bears", "Great AI Flower Creepies", to "Steampets", all available right now.!…
              </p>
            </div>
            <button className="gallery_btn">
              <Link href="/stake"> Start Staking</Link>
            </button>{" "}
          </div>
        </section>
      </div>
    </div>
  );
}