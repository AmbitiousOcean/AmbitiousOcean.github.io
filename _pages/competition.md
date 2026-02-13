---
layout: page
title: Competition
permalink: /competition/
nav: true
nav_order: 3
---

## RoboMaster University Championship (China University Robot Competition)
In the RoboMaster University Championship, teams independently design and build multiple types of robots with different roles, then compete in tactical battles inside a designated arena. During the match, teams control their robots to fire projectiles at the opponent’s robots and Base; the side with more remaining Base Health Points wins.
More details: https://www.robomaster.com/en-US

### My contributions
#### Overview
I intensively participated in the design, modeling, assembly, improvement, maintainence of the **Engineer Robot**, and made contributions to the development of the computer vision algorithm for target indentification.

**Time:** Sept. 2021 – Mar. 2023 · Tianjin & Xiamen, China  
**Awards:** National Second Prize · Central Region First Prize


The **Engineer Robot** is responsible for fighting for the mines (props which can be transfered to money in the competition), with the ability to collecting, conveying, manipulating an object fast under real-world constraints (size and weight limitation, impacts, uneven ground, and strict reliability requirements).


<div class="comp-grid">
  <img src="{{ '/assets/img/competition/cover.jpg' | relative_url }}" alt="cover">
  <img src="{{ '/assets/img/competition/robot.jpg' | relative_url }}" alt="robot">
</div>

#### 1) Mechanical design: 

 The robot consisted of three main subsystems:

- **Chassis:** mecanum wheels with a flexible suspension to traverse complex arenas
- **Lifting module:** pneumatic cylinder actuation controlled by solenoid valves
- **Vacuum gripper:** multi-suction-cup end-effector with a vacuum pump providing negative pressure

Skills I learned: 
mechanical design
3D-modelling (solidworks)

<div class="comp-grid">
  <img src="{{ '/assets/img/competition/me2.jpg' | relative_url }}" alt="me2">
  <img src="{{ '/assets/img/competition/me1.jpg' | relative_url }}" alt="me1">
</div>

---

#### 2) Perception: real-time target identification and 6D pose estimation
I developed a vision pipeline for **real-time target detection and 6D pose measurement** using:
- **Depth camera:** Intel RealSense D435i  
- **Embedded compute:** NVIDIA Jetson TX2  
- **Software:** Python, OpenCV, pyrealsense2, C++

The output pose was used to support accurate alignment for grasping under time pressure and variable lighting.


#### 3) Team tutoring and knowledge transfer
I coached freshman team members on **Mechanics of Materials** fundamentals and how to apply them to practical mechanical design, helping the team ramp up faster and reduce trial-and-error in part design. 

---


It's really unforgettable experience to work with the teammates from many different fields！


<div class="comp-grid">
  <img src="{{ '/assets/img/competition/team.jpg' | relative_url }}" alt="team">
  <img src="{{ '/assets/img/competition/team2.jpg' | relative_url }}" alt="team2">

</div>

<script src="{{ '/assets/js/comp-grid-row-min-crop.js' | relative_url }}"></script>
