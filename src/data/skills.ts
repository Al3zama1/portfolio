export interface SkillGroup {
  title: string;
  items: string[];
}

export const TOOLS: string[] = [
  "GNS3",
  "Cisco IOS",
  "Wireshark",
  "Linux",
  "Windows",
  "VMWare Workstation",
  "Git",
];


// export const skillGroups = [
//   { title: "Switching & VLANs", items: ["VLSM addressing", "VLANs & trunking", "Rapid PVST+", "EtherChannel (LACP)", "Inter-VLAN routing"] },
//   { title: "Routing", items: ["OSPF multi-area", "EIGRP & redistribution", "HSRP", "NAT / PAT", "eBGP", "IPv6"] },
//   { title: "Network Security", items: ["Port security", "DHCP snooping & DAI", "ACLs", "SSH-only management", "IPsec / GRE VPN", "Zone-based firewall"] },
//   { title: "Network Services", items: ["DNS (BIND9)", "DHCP", "RADIUS", "NTP", "QoS marking"] },
//   { title: "Monitoring & Automation", items: ["SNMPv3", "Syslog", "Python / Netmiko", "Jinja2 templates", "Ansible", "Git"] },
//   { title: "Active Directory & Windows", items: ["AD DS, DNS & DHCP", "OUs & AGDLP groups", "Group Policy", "DHCP failover", "LAPS", "Backup & recovery"] },
//   { title: "Helpdesk & Support", items: ["Account & password resets", "Permission troubleshooting", "PowerShell onboarding", "Ticket documentation", "Troubleshooting method"] },
// ];

export const SKILL_GROUPS: SkillGroup[] = [
  { title: "Switching & VLANs", items: ["VLSM addressing", "VLANs & trunking", "Rapid PVST+", "EtherChannel (LACP)", "Inter-VLAN routing"] },
  // { title: "Routing", items: ["OSPF multi-area", "EIGRP & redistribution", "HSRP", "NAT / PAT", "eBGP", "IPv6"] },
  { title: "Network Security", items: ["Port security", "DHCP snooping & DAI", "ACLs", "Network segmentation", "Device hardening"] },
  // { title: "Network Services", items: ["DNS (BIND9)", "DHCP", "RADIUS", "NTP", "QoS marking"] },
  // { title: "Monitoring & Automation", items: ["SNMPv3", "Syslog", "Git"] },
  // { title: "Active Directory & Windows", items: ["AD DS, DNS & DHCP", "OUs & AGDLP groups", "Group Policy", "DHCP failover", "LAPS", "Backup & recovery"] },
  // { title: "Helpdesk & Support", items: ["Account & password resets", "Permission troubleshooting", "PowerShell onboarding", "Ticket documentation", "Troubleshooting method"] },
];