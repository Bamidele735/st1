import React from "react";
import Link from "next/link";
import Image from "next/image";
import Staking from "/public/media/staking.png";
export default function WhyUs() {
  return (
    <div className="container HomeBanner">
      <p className="home_effect home_Banner_header ">
        Now we are offering{" "}
        <span className="down_icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2UOwrAIBAFvUQk3v8mSZVfE4scZ4LESlCMut0OCBa+HV6xGqMoijIKYAFOwA6YZYELWGse73z4HnmUhhmBrSYwAXcMPIBrkKYz5tagE5f2yLulLfJh0j/y4dIauZi0JBeXZnbTJ/fuD6dI0lK2aab5EY9sU0VRFJPwAs/UbERVyi05AAAAAElFTkSuQmCC" />
        </span>
      </p>
<div className="stake_div"><div><Image src={Staking} alt="Metamask image" width={400} /></div>
<div>
      <h1 className="home_h1" data-aos="fade-up" data-aos-duration="3000">
        Faster and Powerful <br/>
        <span>Great Flowers Staking.</span>
      </h1>
</div>
</div>

      <p className="banner_details">
        Our new staking system offers faster transaction speeds, lower fees, and
        increased power and flexibility for stakers. Say goodbye to slow and
        expensive staking and hello to a new era of efficiency and profitability
        {/* Stake & Earn */}
      </p>

      <section className=" home_btn">
        <button className="Staking_btn">
          {" "}
          <Link href="/stake"> Start Staking</Link>{" "}
        </button>
        <button className="mining_btn">
          <Link href="https://flower.greatdaneai.com/" target="_blank">
            {" "}
            Start Minting
          </Link>
        </button>
      </section>
    </div>
  );
}