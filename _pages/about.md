---
layout: about
title: About
permalink: /
subtitle: Email:xinran.wang@epfl.ch | Tel:+41766885991


profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: 

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---
<br>

I am a Robotics M.Sc. student at EPFL, with a minor in Data Science. I am interested in robot learning—especially reinforcement learning, world (action) model，and the interplay between perception, control, and real-world deployment.

<br>


I have a strong foundation in mathematics and physics, and I also bring extensive hands-on engineering experience. I enjoy translating theoretical ideas into working systems, making the robot performs reliably under real-world constraints.


<div class="after-profile-clear"></div>


<h2>Education</h2>

<div class="edu-summary-card">
  <div class="edu-summary-left">
    <h3 class="edu-summary-title">

    </h3>

    <div class="edu-summary-item">
      <a class="edu-school" href="{{ '/education/' | relative_url }}">
        EPFL — M.Sc. in Robotics (Minor in Computer Science)
      </a>
      <div class="edu-meta">Sept. 2025 – Jul. 2028 (expected) </div>
    </div>

    <div class="edu-summary-item">
      <a class="edu-school" href="{{ '/education/' | relative_url }}">
        Tianjin University — B.Eng. in Intelligent Manufacturing Engineering
      </a>
      <div class="edu-meta">Sept. 2020 – Jul. 2024 · GPA 3.82/4.0 · Rank 1/41</div>
    </div>
  </div>

  <div class="edu-summary-right">
    <a href="{{ '/education/' | relative_url }}" class="edu-summary-link">View details →</a>
  </div>
</div>


<h2><a href="{{ '/blog/' | relative_url }}" style="color: inherit;">Latest posts</a></h2>

{% assign posts_limit = page.latest_posts.limit | default: 3 %}
{% for post in site.posts limit: posts_limit %}
<div class="comp-card">
  <a class="comp-media" href="{{ post.url | relative_url }}">
    <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title | strip_html | escape }}">
  </a>

  <div class="comp-body">
    <h3 class="comp-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>

    <div class="comp-sub">{{ post.description }}</div>

    <a class="comp-link" href="{{ post.url | relative_url }}">Read more →</a>
  </div>
</div>
{% endfor %}


<h2><a href="{{ '/research/' | relative_url }}" style="color: inherit;">Research</a></h2>

<div class="research-item">
  <h3 class="research-title">
    <a href="{{ '/research/' | relative_url }}">Learning to Navigate Latent Spaces: Quasimetric Regularization for World-Model-Based Hierarchical Reinforcement Learning</a>
  </h3>

  <div class="research-meta">Semester project · Laboratory of Intelligent Systems (LIS), EPFL · with Alexander Ertl and Prof. Dario Floreano</div>

  <div class="research-sub">
    Shaping a world-model latent space with quasimetric (asymmetric distance) regularizers so a single representation supports both prediction and a meaningful cost-to-go for hierarchical reinforcement learning.
  </div>

  <a class="comp-link" href="{{ '/research/' | relative_url }}">View details →</a>
</div>


<h2>Competition</h2>

<div class="comp-card">
  <a class="comp-media" href="{{ '/competition/' | relative_url }}">
    <img src="{{ '/assets/img/competition/cover.jpg' | relative_url }}" alt="robot overview">
  </a>

  <div class="comp-body">
    <h3 class="comp-title">
      <a href="{{ '/competition/' | relative_url }}">
        RoboMaster University Championship
      </a>
    </h3>

    <div class="comp-sub">
      Built an Engineering Robot (mecanum chassis + pneumatic lifting + vacuum gripper), developed a real-time 6D pose estimation pipeline based on RealSense D435i and Jetson TX2.
    </div>

    <a class="comp-link" href="{{ '/competition/' | relative_url }}">Read more →</a>
  </div>
</div>

<h2>Projects</h2>

<!-- Project card: Quadruped Locomotion with CPG-RL -->
<div class="comp-card">
  <a class="comp-media" href="{{ '/projects/2_project/' | relative_url }}">
    <img src="{{ '/assets/img/projects/2/cover.png' | relative_url }}" alt="Quadruped Locomotion with CPG-RL cover">
  </a>

  <div class="comp-body">
    <h3 class="comp-title">
      <a href="{{ '/projects/2_project/' | relative_url }}">Quadruped Locomotion with CPG-RL</a>
    </h3>

    <div class="comp-sub">
      RL-augmented CPG locomotion in PyBullet with interpretable obs/action/reward design; omnidirectional velocity tracking and slope locomotion.
    </div>

    <a class="comp-link" href="{{ '/projects/2_project/' | relative_url }}">Read more →</a>
  </div>
</div>


<!-- Project card: Mobile Logistics Robot -->
<div class="comp-card">
  <a class="comp-media" href="{{ '/projects/1_project/' | relative_url }}">
    <img src="{{ '/assets/img/projects/1/cover.png' | relative_url }}" alt="Mobile Logistics Robot cover">
  </a>

  <div class="comp-body">
    <h3 class="comp-title">
      <a href="{{ '/projects/1_project/' | relative_url }}">Mobile Logistics Robot</a>
    </h3>

    <div class="comp-sub">
      From-scratch mecanum AGV + linkage arm + ROS navigation (SLAM/AMCL/A*/TEB) + vision-to-grasp pipeline.
    </div>

    <a class="comp-link" href="{{ '/projects/1_project/' | relative_url }}">Read more →</a>
  </div>
</div>


<script>
  function syncIntroImageHeight() {
    const text = document.getElementById("intro-text");
    const box  = document.getElementById("intro-img-box");
    if (!text || !box) return;

    // Only enforce equal height on desktop; on mobile it stacks naturally.
    if (window.innerWidth >= 768) {
      box.style.height = text.offsetHeight + "px";
    } else {
      box.style.height = "auto";
    }
  }

  window.addEventListener("load", syncIntroImageHeight);
  window.addEventListener("resize", syncIntroImageHeight);
</script>
