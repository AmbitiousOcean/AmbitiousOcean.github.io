---
layout: page
title: Quadruped Locomotion with CPG-RL
description: RL-augmented CPG locomotion in PyBullet with physically interpretable obs/action/reward design; omnidirectional velocity tracking and slope locomotion.
img: assets/img/projects/2/cover.jpg
importance: 1
category: work
---

*Mini-Project for EPFL Legged Robots Course*

## Overview
This project develops **RL-augmented CPG locomotion controllers** for a quadruped robot in **PyBullet**, trained with **Stable-Baselines3 PPO**. We designed **physically interpretable observation/action spaces and reward functions**, achieving **omnidirectional velocity tracking** and **stable locomotion on inclined terrain**. 

---

## Highlights
- Trained **PPO** locomotion policies with a **CPG-modulation action space** and compared against **Cartesian-PD action spaces**. 
- Built **three observation configurations** (full / medium / minimal) and analyzed learning stability vs. sensor richness. 
- Designed **velocity-tracking rewards** (vx, vy, ωz) with stability & energy penalties, enabling **omnidirectional command tracking**. 
- Achieved **slope locomotion** with generalization up to **pitch ≈ 0.275 rad** .  

---

## Technical Approach

### 1) CPG + Low-level Control
We used CPG oscillators to generate rhythmic gait signals and mapped them to foot trajectories. Low-level tracking was done with **joint-space PD** and **Cartesian-space PD**, and we tuned gains based on the shared second-order closed-loop dynamics interpretation (mass–spring–damper form). 

### 2) RL Formulation (SB3 PPO)
**Algorithm:** Proximal Policy Optimization (PPO) in Stable-Baselines3, with observation normalization via **VecNormalize** for stability.


---

## Results

### Omnidirectional Velocity Tracking
Because the reward explicitly includes both **x/y linear velocities** and **yaw rate**, the learned controller can track multi-axis commands (e.g., simultaneous motion in x and y). 

### Action Space Comparison (CPG-RL vs Cartesian)
Under comparable training, the **CPG-based policy** produces more structured periodic gaits, while Cartesian action spaces can converge but tend to yield less natural coordination and different efficiency characteristics. 


### Slope Locomotion
Training on slope **pitch ≈ 0.2 rad** and evaluating on steeper terrains, the policy can reliably traverse up to **pitch ≈ 0.275 rad** (with occasional success at 0.3 rad). 

---

## Media

<video controls playsinline class="img-fluid rounded z-depth-1" style="width: 100%;">
  <source src="{{ '/assets/video/RL_SLOPE_NormalSpeed.mp4' | relative_url }}" type="video/mp4">

  Your browser does not support the video tag.
</video>


---

## Tech Stack
- **Simulation:** PyBullet  
- **RL:** Stable-Baselines3 (PPO), VecNormalize  
- **Control:** CPG-based gait generation, inverse kinematics, joint PD / Cartesian PD  
- **Evaluation:** velocity tracking (including omnidirectional), robustness (noise), slope locomotion :contentReference[oaicite:16]{index=16}  

---

## Links
- Report: https://github.com/dzhou20/epfl-legged-robot-project-2025/blob/main/lr_mp2_group_21/LR_mp2_group_21_report.pdf
- Code: https://github.com/dzhou20/epfl-legged-robot-project-2025
