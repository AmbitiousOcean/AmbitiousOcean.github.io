---
layout: post
title: We are the winner of ETH Robotics Club's HACK2026 🏆
date: 2026-03-23 12:00:00
description: First place at ETH Robotics Club's HACK2026 — building a system that lets a humanoid robot autonomously navigate and perform manipulation tasks, in just 48 hours.
tags: robotics hackathon imitation-learning humanoid lerobot
categories: blog
thumbnail: assets/img/eth_rc_hack2026/main.jpg
images:
  slider: true
---

This was my first hackathon — and I'm still not over the fact that we won **1st place** at ETH Robotics Club's HACK2026 🏆

These past two days were such an unforgettable experience for me — getting to build alongside robotics students from across Europe and meeting so many new people made it even more special.

{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/main.jpg" class="img-fluid rounded z-depth-1" %}

Our goal was to explore how humanoid robots could help address labour shortages, for example in restaurant scenarios like delivery and packaging. In just **48 hours**, we built a system that enables a humanoid robot to autonomously navigate outsides and perform manipulation tasks — such as picking up a can.

I was deeply involved in the manipulation side, working on imitation learning. A huge thanks to Martino Russi from Hugging Face — his Hall-effect-based humanoid bimanual teleoperation system, the [Homunculus Exoskeleton](https://github.com/nepyope/hmc_exo), is an incredibly clever and practical design that allowed us to efficiently collect high-quality teleoperation data.

We also benefited a lot from LeRobot, which made it very easy to quickly train an imitation learning policy (ACT). From data collection to deploying the trained policy on the robot, the whole process took only around **10 hours**. What surprised us most was how stable and robust the learned policy turned out to be — during the demo, the robot successfully grasped the can every time.

<style>
  .gallery-fixed swiper-slide figure { width: 100%; margin: 0; }
  .gallery-fixed swiper-slide picture,
  .gallery-fixed swiper-slide img {
    display: block;
    width: 100%;
    height: 460px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    .gallery-fixed swiper-slide picture,
    .gallery-fixed swiper-slide img { height: 260px; }
  }
</style>

<swiper-container class="gallery-fixed" keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/photo_team.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/photo_4.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/photo_2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/screenshot_1.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/screenshot_2.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/screenshot_3.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/screenshot_4.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/screenshot_5.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/eth_rc_hack2026/photo_1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

I feel really lucky to have worked with such an amazing team. Everyone contributed in their own way, and we definitely wouldn't have achieved this without every single member. Huge shoutout to Kayden Knapik, Cezar Solovastru, Benjamin Knöbel del Olmo, Natcha Jengjirapas, and Miguel Huber.

Big thanks to the ETH Robotics Club and Declan Shine for putting together such a well-organized and inspiring event. It was an amazing opportunity to build, learn, and meet so many talented people. It was also great to see support from partners including OpenAI, Hugging Face, Virtuals Protocol, Rerun, and General Catalyst.
