import { SITE } from "./site";

export type ThumbStyle = "t1" | "t2" | "t3";

export interface Lab {
  id: string;
  label: string;
  thumb: ThumbStyle;
  title: string;
  category: string;
  description: string;
  chips: string[];
  /** Full write-up on the knowledge base. */
  walkthrough?: string;
  /** YouTube link. The "Watch video" button only shows when this is set. */
  video?: string;
  /** GitHub repo. The "GitHub" button only shows when this is set. */
  github?: string;
}

export interface LabLesson {
  num: string;
  title: string;
  text: string;
  labId: string;
}

const lab = (slug: string) => `${SITE.learnUrl}/labs/${slug}`;

export const LABS: Lab[] = [
  {
    id: "secure-multi-vlan-office-network",
    label: "Lab 01",
    thumb: "t1",
    title: "Secure Multi-VLAN Office Network",
    category: "Switching / VLANs / Port Types / Layer 2 Security",
    description:
      "A redundant office network with six VLANs, load-balanced spanning tree, EtherChannel, port security, DHCP snooping, ACL-controlled access and SSH-only management.",
    chips: ["STP", "Trunking", "EtherChannel", "DAI", "DHCP Snooping", "DHCP"],
    walkthrough: lab("/portfolio/secure-multi-vlan-office-network"),
    video: "",
    github: "",
  },
  // {
  //   id: "site-to-site-vpn",
  //   label: "Lab 02",
  //   thumb: "t2",
  //   title: "Site-to-Site VPN",
  //   category: "Network Security / VPN",
  //   description:
  //     "An IPsec tunnel between two branch routers, tested end to end and documented step by step.",
  //   chips: ["GNS3", "IPsec", "Linux"],
  //   walkthrough: lab("site-to-site-vpn"),
  //   video: "",
  //   github: "",
  // },
  // {
  //   id: "home-lab-monitoring",
  //   label: "Lab 03",
  //   thumb: "t3",
  //   title: "Home Lab Monitoring",
  //   category: "Monitoring / Observability",
  //   description:
  //     "SNMP and syslog monitoring with dashboards and alerts, so device events become visible at a glance.",
  //   chips: ["SNMP", "Syslog", "Grafana", "Ubuntu"],
  //   walkthrough: lab("home-lab-monitoring"),
  //   video: "",
  //   github: "",
  // },
];

export const LAB_LESSONS: LabLesson[] = [
  {
    num: "01 / Switching",
    title: "How redundant switches avoid loops and still use every link",
    text: "Rapid PVST+ blocks loops, and giving each VLAN a different root bridge sends traffic over both uplinks. PortFast and BPDU Guard protect the edge.",
    labId: "secure-multi-vlan-office-network",
  },
  {
    num: "02 / VLANs and port types",
    title: "How access and trunk ports keep departments separate",
    text: "Access ports place a device in one VLAN, while trunks carry many. A custom native VLAN and disabled DTP close common trunking weaknesses.",
    labId: "secure-multi-vlan-office-network",
  },
  {
    num: "03 / Layer 2 security",
    title: "How rogue devices are stopped at the access port",
    text: "Port security limits MAC addresses, DHCP snooping blocks a fake DHCP server, and Dynamic ARP Inspection checks ARP replies against the snooping table.",
    labId: "secure-multi-vlan-office-network",
  },
  {
    num: "04 / IP addressing",
    title: "How to plan addresses with VLSM",
    text: "Each VLAN gets a subnet sized for its hosts, from the largest to the smallest, so no address space is wasted and the plan is easy to read.",
    labId: "secure-multi-vlan-office-network",
  },
  {
    num: "05 / Management access",
    title: "How management access is locked down",
    text: "Switches and routers sit in a management VLAN that only a separate IT admin subnet can reach, and SSH is accepted from that subnet alone. Keeping the admin PC in its own VLAN is what lets a router ACL enforce the rule.",
    labId: "secure-multi-vlan-office-network",
  },
];
