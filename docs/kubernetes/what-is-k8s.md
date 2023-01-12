---
sidebar_position: 1
---

# What Is Kubernetes (K8s)

## Introduction
Kubernetes, also known as `K8s`, is an open-source container orchestration system that automates the deployment, scaling, and management of containerized applications. It was originally developed by Google and it is now maintained by the Cloud Native Computing Foundation (CNCF). Kubernetes makes it easy to run and scale large numbers of containers in a cluster, it provides an efficient way to manage and orchestrate containers at scale.

## Core concepts

In order to understand how Kubernetes works, it's helpful to think of it as a container ship. Kubernetes acts as the "mother ship" that manages and coordinates all the smaller components of the system, similar as how a container ship manage the containers.

### Nodes
- A node is like a smaller ship that transports cargo (containers) to the main ship. 
- The smaller ship may have different size and capacity but all serves the same purpose, to transport the cargo. Similarly, Nodes are used to host `pods`, which are the smallest and simplest objects in Kubernetes.

### Pods
- A pod is like a container in a ship, every ship needs container to transport goods. 
- Similarly, it is the smallest and simplest object in the Kubernetes object model, and it represents a single process running on a node.

### Services
- A service is like a ship's cargo loading and unloading system, it controls the movement of goods. 
- Services are used to expose pods to the network, allowing other objects in the cluster to communicate with them.

### Replication controllers
- A replication controller is like a ship's captain, it makes sure the ship is running smoothly and has the right number of cargo in the ship.
- If any cargo goes down, the captain will make sure to get a new one to take its place. 
- Similarly, This provides a level of redundancy and availability for the pods that are controlled by it.

## Kubernetes Architecture

Just like a container ship, Kubernetes has a flexible architecture that allows for easy integration with other systems. At a high level, the architecture is composed of a `control plane` (the captain's deck) and multiple `worker nodes` (smaller ships that transport cargo).

The control plane (captain's deck) is responsible for maintaining the desired state of the cluster, such as which pods (containers) should be running and on which nodes (smaller ships). The most important components of the control plane are:

- The `etcd` database (ship's manifest), which stores the configuration data for the cluster
- The `API server` (ship's communication system), which exposes the Kubernetes API and processes RESTful requests to the cluster
- The `controller manager` (ship's navigation system), which runs background tasks that ensure the desired state of the cluster is met
- The `scheduler` (ship's cargo loading and unloading system), which is responsible for deciding on which nodes to place new pods

Worker nodes (smaller ships), on the other hand, are responsible for running pods (containers) and sending information back to the control plane (captain's deck). The important components of a worker node are:

- The `kubelet` (ship's crew), which is the primary node agent, it communicates with the control plane (captain's deck) and ensures that the desired state of pods (containers) is met
- The `container runtime` (ship's engines), which is responsible for starting, stopping, and managing the containers in pods

## Seeing It Altogether

Kubernetes provides an efficient way to deploy, scale and manage containerized applications in production. In this section, let's take an example of deploying a web application and compare it with the traditional approach of deploying on a single server.

### Traditional approach 
In the traditional approach, we would typically deploy our web application on a single server. This server would be responsible for running the web application, as well as handling all of the underlying infrastructure such as storage, networking, and security.

The major drawback of this approach is that it becomes difficult to handle traffic as the number of users increases, and it's also difficult to scale the resources according to the demand. It also lacks flexibility in terms of load balancing, monitoring and failover mechanisms.

### Kubernetes Approach 
With Kubernetes, we can deploy our web application in a cluster of servers. Each server, known as a node, runs one or more containers that make up the web application. 

The Kubernetes control plane, composed of the `etcd`, `API server`, `controller manager`, and `scheduler`, is responsible for maintaining the desired state of the cluster. It ensures that the right number of replicas of the web application are running and available at all times.

Kubernetes allows us to use resources more efficiently and scale the application according to the demand. It also provides features like load balancing, monitoring and automatic failover, making it an efficient and robust way to manage containerized applications.

## Conclusion

Kubernetes, also known as `K8s`, is an open-source container orchestration system that automates the deployment, scaling, and management of containerized applications. It provides an efficient way to manage and orchestrate containers at scale, which is essential for organizations that run a large number of containerized applications.

Kubernetes is widely adopted and has become the de facto standard for container orchestration, and it is foundation of many popular platforms and tools such as Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), OpenShift, Rancher, etc. It provides efficient way to handle traffic and resources, and ensures that the applications are always available and performant.

## Resources

If you're interested in learning more about Kubernetes, here are a few resources that you can check out:

- The Kubernetes website: [https://kubernetes.io/](https://kubernetes.io/)
- The Kubernetes documentation: [https://kubernetes.io/docs/](https://kubernetes.io/docs/)
- Kubernetes on GitHub: [https://github.com/kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)
- The Kubernetes community slack channel: [http://slack.k8s.io/](http://slack.k8s.io/)
- Kubernetes on YouTube channel: [https://www.youtube.com/c/KubernetesCommunity](https://www.youtube.com/c/KubernetesCommunity)
