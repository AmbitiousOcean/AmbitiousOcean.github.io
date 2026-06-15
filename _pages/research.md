---
layout: page
title: Research
permalink: /research/
description:
nav: true
nav_order: 4
---

<div class="research-item">
  <h3 class="research-title">Learning to Navigate Latent Spaces: Quasimetric Regularization for World-Model-Based Hierarchical Reinforcement Learning</h3>

  <div class="research-meta">Semester project · Laboratory of Intelligent Systems (LIS), EPFL · with Alexander Ertl and Prof. Dario Floreano</div>

  <p class="research-sub">
    Hierarchical reinforcement learning with a learned world model splits long-horizon tasks into a high-level policy that proposes subgoals and a low-level policy that reaches them — which needs a reliable notion of "progress" toward a goal. This project explores shaping the world-model latent space with <em>quasimetric</em> (asymmetric distance) regularizers so that a single representation supports both prediction and a meaningful cost-to-go. On the Atari Krull and PinPad-four benchmarks, the proposed regularizers improve final returns and substantially reduce variance.
  </p>

  <ul class="research-points">
    <li>Built a PyTorch codebase for hierarchical RL on top of the Dreamer world model.</li>
    <li>Added a quasimetric local-consistency loss to the Dreamer world-model training objective, so the latent space's distance structure encodes task-relevant information.</li>
    <li>Implemented a parameter-free, IQE-style quasimetric module on top of the world-model latent space to represent distances between neighbouring latent states.</li>
    <li>Studied how world-model quasimetric distances can be used for value-function estimation in goal-conditioned RL.</li>
  </ul>

  {% include figure.liquid loading="eager" path="assets/img/research/pp4_heatmap.png" class="img-fluid rounded z-depth-1" %}
  <div class="research-caption">Learned quasimetric distance on PinPad-four: from a reference point in pad 1 to every state (left) vs. from every state back to the reference (right). The asymmetry between the two maps shows the latent space captures direction of travel, not just proximity.</div>
</div>
