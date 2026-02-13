---
layout: page
title: Mobile Logistics Robot
description: From-scratch mecanum AGV + linkage arm + ROS navigation (SLAM/AMCL/A*/TEB) + vision-to-grasp pipeline
img: assets/img/projects/1/cover.png
importance: 2
category: work
---

## Overview
This project delivers a **mobile manipulation system** that integrates an omnidirectional AGV, a linkage-based arm and gripper, and a ROS-centered software stack to support **autonomous navigation** and an end-to-end **vision-based grasping loop**.



---

## Phase I — “From Scratch” Mechanical Mobile Manipulator


<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1/phase1_m.png"
      title="Phase I Modeling" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1/phase1.jpg"
      title="Phase I Robot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>


### Requirements & Targets
- Built an **AGV-based mobile manipulator** for long-range pick-and-place.
- Designed to meet report-defined constraints on **DOF**, **arm reach**, and **platform mobility speed**.

### Systematic Concept Selection
- Followed a structured workflow: **functional decomposition → morphological matrix → concept evaluation matrix**.
- Final architecture decisions:
  - **Mecanum-wheel omnidirectional base**
  - **Four-bar-assisted arm concept**
  - **Gear-driven gripper**
  - **Servo + turntable-bearing yaw axis**

### Detailed Design & Realization
- Completed module-level mechanical design and component selection.
- Delivered full CAD implementation including **3D modeling and assembly** of the integrated system.

### Kinematics / Simulation / Prototyping
- Performed arm **kinematics** and **workspace analysis**.
- Validated the design using simulation tools (e.g., **SolidWorks / MATLAB / Adams**).
- Conducted prototyping, assembly, and debugging to achieve a functional platform.


---

## Phase II — System Integration for Navigation + Vision-Based Grasping

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1/phase2_m.png"
      title="Phase II img" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1/phase2.png"
      title="Phase II Robot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>


### Mechanical Integration Updates
- Designed a camera mount to satisfy depth-camera operating range while reducing LiDAR occlusion.
- Improved effective camera distance from approximately **52 cm to 64 cm**.

### ROS-Centered Architecture
- Implemented a modular ROS stack with **gimbal**, **navigation**, **vision**, and **grasp** subsystems.
- Communication design:
  - **Navigation ↔ Vision:** ROS **services**
  - **Vision ↔ Grasp:** **serial communication**

### Navigation Pipeline
- Built an autonomous navigation workflow including:
  - **SLAM mapping** （GMapping）
  - **AMCL localization**
  - **A\*** global planning
  - **TEB** local planning 
  - Obstacle avoidance & control
  - **RViz** visualization
  - Fault handling with replanning

### Vision-to-Grasp Loop
- Established an end-to-end grasping loop:
  - Object information **encoding/decoding** over serial
  - Arm motion via **inverse kinematics (IK)**
  - Robust grasp/place logic with **anti-duplicate triggering** to prevent repeated actions on the same target



---

## Media
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1/grasp.png"
      title="grasp" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1/place.png"
      title="place" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
---

## Tech Stack
- **Robotics:** ROS, RViz
- **Navigation:** SLAM (GMapping/Cartographer), AMCL, A\*, TEB
- **Mechanical / modeling:** linkage-based arm, gear-driven gripper, mecanum base
- **Simulation:** SolidWorks, MATLAB, Adams
- **Communication:** ROS services, serial communication
