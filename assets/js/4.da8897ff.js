(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{835:function(e,t,s){e.exports=s.p+"assets/img/acr1.4d5c00d6.png"},836:function(e,t,s){e.exports=s.p+"assets/img/acr2.42f3e50a.png"},837:function(e,t,s){e.exports=s.p+"assets/img/acr3.4eb3e35b.png"},838:function(e,t,s){e.exports=s.p+"assets/img/acr4.96e2083e.png"},839:function(e,t,s){e.exports=s.p+"assets/img/acr5.ed03db90.png"},840:function(e,t,s){e.exports=s.p+"assets/img/acr6.c28c93c4.png"},841:function(e,t,s){e.exports=s.p+"assets/img/acr7.bbf01d81.png"},842:function(e,t,s){e.exports=s.p+"assets/img/acr8.430f0d1b.png"},843:function(e,t,s){e.exports=s.p+"assets/img/acr9.f1e8deeb.png"},844:function(e,t,s){e.exports=s.p+"assets/img/acr10.83342ef4.png"},845:function(e,t,s){e.exports=s.p+"assets/img/acr11.26f0b30a.png"},846:function(e,t,s){e.exports=s.p+"assets/img/acr12.2bd4e1be.png"},847:function(e,t,s){e.exports=s.p+"assets/img/acr13.08a70d28.png"},848:function(e,t,s){e.exports=s.p+"assets/img/acr14.34e4639e.png"},849:function(e,t,s){e.exports=s.p+"assets/img/acr15.97d278e5.png"},850:function(e,t,s){e.exports=s.p+"assets/img/acr16.2d25f1b2.png"},851:function(e,t,s){e.exports=s.p+"assets/img/acr17.e80a59f8.png"},852:function(e,t,s){e.exports=s.p+"assets/img/acr18.08ea639a.png"},853:function(e,t,s){e.exports=s.p+"assets/img/acr19.687fa8f6.png"},854:function(e,t,s){e.exports=s.p+"assets/img/acr20.79ff5fe5.png"},855:function(e,t,s){e.exports=s.p+"assets/img/acr21.dc3ddb5a.png"},856:function(e,t,s){e.exports=s.p+"assets/img/acr22.b53b2704.png"},857:function(e,t,s){e.exports=s.p+"assets/img/acr23.2ba86dbb.png"},858:function(e,t,s){e.exports=s.p+"assets/img/acr24.294463b2.png"},859:function(e,t,s){e.exports=s.p+"assets/img/acr25.fa2e6685.png"},860:function(e,t,s){e.exports=s.p+"assets/img/acr26.647b1f48.png"},861:function(e,t,s){e.exports=s.p+"assets/img/acr27.526eb29f.png"},862:function(e,t,s){e.exports=s.p+"assets/img/acr28.cfa85d40.png"},965:function(e,t,s){"use strict";s.r(t);var a=s(34),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"challenge-5-azure-container-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenge-5-azure-container-services"}},[e._v("#")]),e._v(" Challenge 5: Azure Container Services")]),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-ll-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-ll-learn"}},[e._v("#")]),e._v(" Here is what you'll learn")]),e._v(" "),a("ul",[a("li",[e._v("Creating Azure Container Registry Instance")]),e._v(" "),a("li",[e._v("Pushing images that we have built to ACR")]),e._v(" "),a("li",[e._v("Creating first AKS cluster and deploying phpapp application")])]),e._v(" "),a("p",[e._v("In this challenge, we're gonna create our ACR and AKS instances and deploy a php based webapp that we have containerized at the end of challenge 4.")]),e._v(" "),a("h2",{attrs:{id:"exercises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exercises"}},[e._v("#")]),e._v(" Exercises")]),e._v(" "),a("p",[a("strong",[e._v("1: Azure Container Registry")])]),a("details",[a("summary",[e._v("Click to expand!")]),a("p"),e._v(" "),a("p",[e._v("In this first task, we'll create a new Azure Container Registry (ACR) Instance. Azure Container Registry allows us to build, store, and manage container images and artifacts in a private registry for all types of container deployments. We're gonna store 2 images that we've created at the end of the challenge 4. Let's get started. We'll complete this via portal, so let's jump to https://portal.azure.com")]),e._v(" "),a("ul",[a("li",[e._v("Click the hamburger icon on the top left of the screen.")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create a resource")]),e._v(" link.")])]),e._v(" "),a("img",{attrs:{src:s(835)}}),e._v(" "),a("ul",[a("li",[e._v("Click "),a("strong",[e._v("Container")]),e._v(" on the left menu.")]),e._v(" "),a("li",[e._v("Continue with "),a("strong",[e._v("Container Registry")]),e._v(" option")])]),e._v(" "),a("img",{attrs:{src:s(836)}}),e._v(" "),a("ul",[a("li",[e._v("Now we're on the "),a("strong",[e._v("Create container registry")]),e._v(" screen.")]),e._v(" "),a("li",[e._v("Select a subscription. Click "),a("strong",[e._v("Create New")]),e._v(" button once the Resource Group and create a new resource group.")]),e._v(" "),a("li",[e._v("Fill the other values.\n"),a("ul",[a("li",[e._v("Registry Name: Type a unique name.")]),e._v(" "),a("li",[e._v("Location: Select "),a("strong",[e._v("West Europe")]),e._v(".")]),e._v(" "),a("li",[e._v("SKU: Keep as is. "),a("strong",[e._v("Standard")])])])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Review + create")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(837)}}),e._v(" "),a("ul",[a("li",[e._v("Click "),a("strong",[e._v("Create")]),e._v(" and finalize the ACR creation steps.")])]),e._v(" "),a("img",{attrs:{src:s(838)}}),e._v(" "),a("ul",[a("li",[e._v("When done, click "),a("strong",[e._v("Go to resource")]),e._v(" button and access newly created ACR instance.")])]),e._v(" "),a("img",{attrs:{src:s(839)}}),e._v(" "),a("ul",[a("li",[e._v("Now it's time to get connection details of our ACR instance.")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Access keys")]),e._v(" on the left.")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Enable")]),e._v(" under the "),a("strong",[e._v("Adminuser")]),e._v(" section and enable Adminuser.")]),e._v(" "),a("li",[e._v("Copy the "),a("strong",[e._v("Login Server")]),e._v(", "),a("strong",[e._v("Username")]),e._v(" and "),a("strong",[e._v("Password")]),e._v(" values into a text editor. We'll use these later.")])]),e._v(" "),a("img",{attrs:{src:s(840)}}),e._v(" "),a("ul",[a("li",[e._v("We have created an ACR instance and it's ready to store our images. Let's turn back to Terminal and push images that we have created before.")]),e._v(" "),a("li",[e._v("First, let's get logged out from current registry.\nType:")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("logout")]),e._v("\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Removing login credentials "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" https://index.docker.io/v1/\n")])])]),a("img",{attrs:{src:s(841)}}),e._v(" "),a("ul",[a("li",[e._v("It's time log into our newly created ACR instance.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" login acr_login_url -u Username -p Password\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("WARNING"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" Using --password via the CLI is insecure. Use --password-stdin.\nLogin Succeeded\n")])])]),a("img",{attrs:{src:s(842)}}),e._v(" "),a("ul",[a("li",[e._v("We could successfully logged in. This means that from now on we can push images to this registry. But to be able to do that, we have to retag the images that we have created at the end of the challenge 4. Simply we have to add new tags to them, in this format  "),a("code",[e._v("registry_url/repository_name:tag")]),e._v(". Let's do that.")]),e._v(" "),a("li",[e._v("First, let's list all the images on the system.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" image "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("\nREPOSITORY                TAG                 IMAGE ID            CREATED             SIZE\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\n\nyour_dockerhub_id/mysql   v1                  2dfc8038fc98        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" hours ago        448MB\nyour_dockerhub_id/php     v1                  53959f571f38        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" hours ago        484MB\n")])])]),a("ul",[a("li",[e._v("There should be 2 images that we have created at the end of the challenge 4. They were tagged as your_dockerhub_id/mysql:v1 and your_dockerhub_id/php:v1. We're gonna add new tags to these images.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" image tag your_dockerhub_id/php:v1 acr_login_url/php:v1\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" image tag your_dockerhub_id/mysql:v1 acr_login_url/mysql:v1\n")])])]),a("ul",[a("li",[e._v("Let's list all the images on the system and check these newly added tags.\nType:")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" image "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\nyour_dockerhub_id/mysql v1                  2dfc8038fc98        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" hours ago        448MB\nyour_dockerhub_id/php   v1                  53959f571f38        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" hours ago        484MB\nacr_login_url/mysql     v1                  2dfc8038fc98        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" hours ago        448MB\nacr_login_url/php       v1                  53959f571f38        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" hours ago        484MB\n")])])]),a("img",{attrs:{src:s(843)}}),e._v(" "),a("ul",[a("li",[e._v("Now we can push these images to the ACR.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" image push acr_login_url/php:v1\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("The push refers to repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("acr_login_url/php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nef135f6687e4: Pushed\n906d50a6011e: Pushed\n74bbc08fe8c6: Pushed\n90745e8b7e7b: Pushed\na5fa399e1d62: Pushed\n4d03ed8f1ffa: Pushed\nb5c4094c6b8e: Pushed\na2631c469b37: Pushed\n31a253c57a1c: Pushed\n22678990c57c: Pushed\nf75b06f87220: Pushed\n3ef0156771b5: Pushed\nc7ba9188a7f6: Pushed\nb325a1cca10d: Pushed\n7edde2b8acef: Pushed\n65bff11b305b: Pushed\nde5ed450c2e9: Pushed\n8bf7a47284aa: Pushed\nd0f104dc0a1f: Pushed\nv1: digest: sha256:3e49eee893ac4eedf9b945a0f1e2bfde431e5862d18bb4d9fbe6e2c87c35e67c size: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4285")]),e._v("\n")])])]),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" image push acr_login_url/mysql:v1\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("The push refers to repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("acr_login_url/mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nce1b5c35832c: Pushed\nf6bef35c0067: Pushed\na6ea401b7864: Pushed\n94bd7d7999de: Pushed\n8df989cb6670: Pushed\nf358b00d8ce7: Pushed\nae39983d39c4: Pushed\nb55e8d7c5659: Pushed\ne8fd11b2289c: Pushed\ne9affce9cbe8: Pushed\n316393412e04: Pushed\nd0f104dc0a1f: Mounted from php\nv1: digest: sha256:929ac51065d473c23229f1f85be02b854aaab147d1ebaa018884f1a5ee455b4f size: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2828")]),e._v("\n")])])]),a("img",{attrs:{src:s(844)}}),e._v(" "),a("ul",[a("li",[e._v("Turn back to portal and confirm that these images were pushed and stored in the ACR.")]),e._v(" "),a("li",[e._v("We successfully re-tagged our images and pushed them to newly created ACR. Image part has been completed.")])]),e._v(" "),a("img",{attrs:{src:s(845)}})]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("2: Azure Kubernetes Service")])]),a("details",[a("summary",[e._v("Click to expand!")]),a("p"),e._v(" "),a("p",[e._v("It's time to create our first AKS cluster.")]),e._v(" "),a("ul",[a("li",[e._v("On the portal, find your Resource Group and on the overview screen click "),a("strong",[e._v("Add")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(846)}}),e._v(" "),a("ul",[a("li",[e._v("Under the the "),a("strong",[e._v("Containers")]),e._v(" click "),a("strong",[e._v("Kubernetes Service")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(847)}}),e._v(" "),a("ul",[a("li",[e._v("Select your subscription.")]),e._v(" "),a("li",[e._v("Fill the other values.\n"),a("ul",[a("li",[e._v("Kubernetes cluster name: Type a unique name.")]),e._v(" "),a("li",[e._v("Region: Select "),a("strong",[e._v("West Europe")]),e._v(".")]),e._v(" "),a("li",[e._v("Kubernetes version: Leave as is.")])])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Authentication")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(848)}}),e._v(" "),a("ul",[a("li",[e._v("Select "),a("strong",[e._v("System-assigned managed identity")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Integrations")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(849)}}),e._v(" "),a("ul",[a("li",[e._v("Select the ACR instance that we created a few minutes ago.")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Review + create")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(850)}}),e._v(" "),a("ul",[a("li",[e._v("Click "),a("strong",[e._v("Create")]),e._v(" and wait until it has been successfully created.")])]),e._v(" "),a("img",{attrs:{src:s(851)}}),e._v(" "),a("img",{attrs:{src:s(852)}}),e._v(" "),a("ul",[a("li",[e._v("Congrats. You have successfully built your first AKS cluster.\n")])])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("3: Deploy php app to AKS")])]),a("details",[a("summary",[e._v("Click to expand!")]),a("p"),e._v(" "),a("p",[e._v("Now it's time to deploy our php app to AKS cluster.")]),e._v(" "),a("ul",[a("li",[e._v("We're gonna use "),a("code",[e._v("kubectl")]),e._v(" tool to manage Kubernetes cluster. Kubernetes command-line tool, kubectl, allows us to run commands against Kubernetes clusters. We can use kubectl to deploy applications, inspect and manage cluster resources, and view logs. You can either install "),a("code",[e._v("kubectl")]),e._v(" in your terminal or you can use "),a("strong",[e._v("Azure Cloud Shell")]),e._v(" where "),a("code",[e._v("kubectl")]),e._v(" is already installed.")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Cloud Shell")]),e._v(" icon on the top left right side of the portal screen and open it.")]),e._v(" "),a("li",[e._v("If asked, select "),a("strong",[e._v("Bash")]),e._v(" and open the shell.")]),e._v(" "),a("li",[e._v('When you interact with an AKS cluster using the kubectl tool, a configuration file is used that defines cluster connection information. This configuration file is typically stored in ~/.kube/config. Multiple clusters can be defined in this kubeconfig file. "az aks get-credentials" command lets you get access to the credentials for an AKS cluster and merges them into the kubeconfig file. Now we use that command and merge the credential into our kubeconfig file. Thus we can manage our Kubernetes cluster.')])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ az aks get-credentials --resource-group resource_group_name --name aks_cluster_name\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("The behavior of this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" has been altered by the following extension: aks-preview\nMerged "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"aks_cluster_name"')]),e._v(" as current context "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" /home/username/.kube/config\n")])])]),a("ul",[a("li",[e._v("We have merge the config. It's time to check if kubectl works properly. Let's list all the nodes in the cluster.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get nodes\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("NAME                                STATUS   ROLES   AGE   VERSION\naks-agentpool-10704589-vmss000000   Ready    agent   26m   v1.16.13\naks-agentpool-10704589-vmss000001   Ready    agent   26m   v1.16.13\naks-agentpool-10704589-vmss000002   Ready    agent   26m   v1.16.13\n")])])]),a("ul",[a("li",[e._v("It seems that our cluster is ready. Let's deploy our app.")])]),e._v(" "),a("img",{attrs:{src:s(853)}}),e._v(" "),a("ul",[a("li",[e._v("There are 2 ways to spin up Kubernetes resources. Imperative method, which is basically using command line. But there’s an easier and more useful way to do, declarative method, creating configuration files using YAML. Most of the things you can deploy to a Cluster in Kubernetes can be described as a YAML file. YAML is a human-readable text-based format that let’s us easily specify configuration-type information by using a combination of maps of name-value pairs and lists of items.")]),e._v(" "),a("li",[e._v("We have created a yaml file to create 2 deployment and 2 service objects. All the config that is needed to create these objects are defined in this yaml file. But what is a deployment, what is a service? These are the object types that you can create on Kubernetes. Simply, deployment object is our application and service object is an end-point that exposes this application to other services or external users. But all of these are Kubernetes related topics and we won't cover them today. We have a full Kubernetes day, Day 7, there you will get all the information related to Kubernetes. Today, we're gonna only deploy this application and that's all.")]),e._v(" "),a("li",[e._v("So first let's open the yaml file. Go to "),a("code",[e._v("day6/apps/kube")]),e._v(" folder and open "),a("code",[e._v("app.yaml")]),e._v(" on a text editor.")]),e._v(" "),a("li",[e._v("There are 2 lines that you have to update here. Go to line 19 and 66 and update the ACR url with your own.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("19--\x3eimage: day6demo.azurecr.io/mysql:v1\n66--\x3eimage: day6demo.azurecr.io/php:v1\n")])])]),a("p",[e._v("After that, copy whole text and turn back to "),a("strong",[e._v("Cloud Shell")])]),e._v(" "),a("ul",[a("li",[e._v("Now type "),a("code",[e._v("code app.deploy")]),e._v(" or "),a("code",[e._v("code app.yaml")]),e._v(" to create a file and open built-in text editor.")]),e._v(" "),a("li",[e._v("In the text editor type CTRL-V to paste the text that you copied a few minutes ago.")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("...")]),e._v(" icon on the top right of the Cloud Shell, save and close the file. Now our yaml file is ready.")])]),e._v(" "),a("img",{attrs:{src:s(854)}}),e._v(" "),a("ul",[a("li",[e._v("It's finally time to deploy our application.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl apply -f app.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or app.deploy based on your filename. ")]),e._v("\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("deployment.apps/mysqldb created\nservice/mysqldb created\ndeployment.apps/phpapp created\nservice/phpapp created\n")])])]),a("ul",[a("li",[e._v("2 deployments and 2 services have been created. Let's check if pods are running or not.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get pods \n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("NAME                                                       READY   STATUS    RESTARTS   AGE\nmysqldb-df67cc945-ctfqg                            "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("                  1m\nphpapp-df67cc945-s5z6n                             "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("                  1m\n")])])]),a("ul",[a("li",[e._v("Type couple of times "),a("code",[e._v("kubectl get pods")]),e._v(" till the statuses turn "),a("code",[e._v("Running")]),e._v(".")])]),e._v(" "),a("img",{attrs:{src:s(855)}}),e._v(" "),a("ul",[a("li",[e._v("Congratulations! We could successfully deploy our application to AKS cluster. Let's access it and see if it works properly. To be able to do that we have to get external ip address of the phpapp service.")])]),e._v(" "),a("p",[e._v("Type:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl get svc\n")])])]),a("p",[e._v("Output will be something like:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("NAME                                       TYPE           CLUSTER-IP     EXTERNAL-IP      PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("    AGE\nmysqldb                                    ClusterIP      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".250.27    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/TCP     48d\nphpapp                                     LoadBalancer   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".243.220   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("51.145")]),e._v(".177.190   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/TCP     47d\nkubernetes                                 ClusterIP      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.1       "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v("/TCP    59d\n")])])]),a("ul",[a("li",[e._v("Copy the external ip address of the phpapp service.")])]),e._v(" "),a("img",{attrs:{src:s(856)}}),e._v(" "),a("ul",[a("li",[e._v("Open a web browser and visit the site published via the copied ip address.")]),e._v(" "),a("li",[e._v("Fill the form and add a new record. If you get "),a("strong",[e._v("Successfully created")]),e._v("  message when you click add, this means that everything works perfectly.")])]),e._v(" "),a("img",{attrs:{src:s(857)}}),e._v(" "),a("img",{attrs:{src:s(858)}}),e._v(" "),a("img",{attrs:{src:s(859)}}),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("4: Clean-up")])]),e._v(" "),a("p",[e._v("When you complete the challenge, please don't forget to delete the resources that you have created. Via the portal, find the resource group that you have created at the beginning of this challenge and delete it. All the resources "),a("strong",[e._v("ACR, AKS")]),e._v(" that you have created in this resource group will be automatically deleted too.\n"),a("img",{attrs:{src:s(860)}})]),e._v(" "),a("img",{attrs:{src:s(861)}}),e._v(" "),a("img",{attrs:{src:s(862)}})]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap up")]),e._v(" "),a("p",[a("strong",[e._v("Congratulations")]),e._v(" you have completed the Azure Container Services challenge. You have created your first ACR instance and AKS cluster and deploy an application.")]),e._v(" "),a("p",[e._v("*** Reference: https://docs.microsoft.com/azure/aks/ https://docs.microsoft.com/azure/container-registry/")])])}),[],!1,null,null,null);t.default=n.exports}}]);