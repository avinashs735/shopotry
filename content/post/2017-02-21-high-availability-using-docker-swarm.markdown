---
author: Sandeep
categories: null
date: 2017-02-21T12:33:09Z
title: High Availability Using Docker Swarm
image: /blog/startup-photos.jpg
slug: /2017/02/21/high-availability-using-docker-swarm/
---

At RedCarpetUp, one of our main challenges has been how to multiply the productivity of our developers so they can build meaningful and disruptive software, while reducing
mindless tasks to a bare minimum.
Its not just about not doing boring work, but that repetition induces errors.

One of these task is building a high-availability cluster and deployments. For a long time, we have been offloading our deployment to platforms like Heroku and Amazon Elastic Beanstalk. But we believe in owning the critical pieces of our platform, because we want to enable developers to run the entire RedCarpet stack on their laptops *exactly* like a production environment.

For a long time now, we have been containerizing our applications using Docker (another YC startup). We started using Docker when it was 0.4 alpha and we pushed into production some of these containers - but they have grown monstrous over that period of time. We have sort of taken fat containers to another level altogether.

Primarily because when we started using Docker, the ecosystem had not evolved to build orchestration and containerization effectively. Today, we have the two big ones - Kubernetes and Docker Swarm.

At RedCarpet, we have been trying to work with orchestration because we were inspired by the folks at Monzo, who are building the [next generation of UK banking on kubernetes](https://monzo.com/blog/2016/09/19/building-a-modern-bank-backend/). But after working with kubernetes for quite some time, we think that Kuberentes has to simplify some of its core concepts - especially ingress and network plugins to work effectively. Being a fintech startup, we are quite paranoid about security (we try to maintain an A+ in our Qualys SSL certification) - and running a full TLS stack on Kubernetes is still buggy.

On the other hand, Docker Swarm does not come with all of the bells and whistles that Kubernetes comes with - especially the StatefulSets and PersistentVolumeClaims - but it does 3 things extremely well: Ingress, Networking and Security.

The v3 version of our platform (including ***Primer***) will soon go live on Google Cloud and Docker Swarm.... which is kind of weird, because Google is the birthplace of Kubernetes ;)
