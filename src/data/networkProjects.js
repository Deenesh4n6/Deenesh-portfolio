// Data for the three "Practical Networking Projects" case studies.
// These are lab / academic portfolio projects, not real client deployments —
// see `deploymentNote` on each project, shown on every card and case study.
// All costs/equipment values are intentionally left blank ("") so the UI
// renders them as editable placeholders (₹____) rather than invented figures.

export const deploymentNote = 'Networking Lab / Portfolio Project — not a real client deployment.'

export const networkProjects = [
  {
    id: 'small-office-network',
    category: 'Networking',
    number: '01',
    title: 'Small Office Network',
    label: 'Network Design & Configuration',
    objective:
      'Design and configure a basic small-office network providing wired connectivity for PCs and a printer along with wireless access.',
    technologies: ['Cisco Packet Tracer', 'Router', 'Switch', 'Access Point', 'PCs', 'Printer'],
    configTasks: [
      'Router configuration',
      'Basic IP addressing',
      'DHCP configuration',
      'Switch connectivity',
      'PC connectivity',
      'Printer connectivity',
      'Wi-Fi configuration',
      'Basic network testing',
      'Ping testing',
      'Troubleshooting',
    ],
    skillsDemonstrated: [
      'LAN design',
      'IP addressing',
      'DHCP',
      'Router configuration',
      'Switch configuration',
      'Wi-Fi setup',
      'Network troubleshooting',
    ],
    diagram: {
      type: 'simple',
      trunk: ['Internet', 'Router', 'Switch'],
      branch: ['PCs', 'Printer', 'Wi-Fi'],
    },
    projectFlow: ['Internet', 'Router', 'Switch', 'Wired Devices + Wi-Fi'],
    caseStudy: {
      problem:
        'A small office needs reliable wired connectivity for a handful of PCs and a shared printer, plus wireless access for laptops and mobile devices, without any existing network infrastructure in place.',
      architecture:
        'A single router connects the office to the internet and handles DHCP, feeding a switch that provides wired ports for PCs and the printer. A wireless access point (built into the router in this design) extends connectivity to Wi-Fi clients.',
      security:
        'Basic security measures apply: a strong Wi-Fi passphrase (WPA2/WPA3), a changed default router admin password, and disabling unused switch ports.',
      testingApproach:
        'Connectivity was verified with ping tests between devices and to the gateway, IP assignment was checked on each client, and the printer was tested from multiple PCs over the LAN.',
      lessonsLearned:
        'Reinforced the fundamentals of IP addressing, DHCP scope planning, and basic switch/router configuration in a simple, flat network topology.',
      futureImprovements:
        'Could be extended with basic VLAN segmentation, a managed switch for better visibility, and guest Wi-Fi isolation as the office grows.',
    },
  },
  {
    id: 'secure-office-network',
    category: 'Networking',
    number: '02',
    title: 'Secure Office Network',
    label: 'VLAN + Firewall + VPN Network',
    objective:
      'Design a segmented office network with separate Staff, Guest, and CCTV networks using VLANs, firewall rules, DHCP, Wi-Fi, and VPN.',
    technologies: ['VLAN', 'Managed Switch', 'Firewall', 'Wi-Fi', 'VPN Concepts'],
    configTasks: [
      'VLAN configuration',
      'VLAN segmentation',
      'DHCP scopes',
      'Firewall rules',
      'Inter-VLAN security policies',
      'Staff Wi-Fi',
      'Guest Wi-Fi',
      'CCTV network',
      'VPN configuration concept',
      'Network testing',
      'Security validation',
    ],
    skillsDemonstrated: [
      'VLAN',
      'Inter-VLAN routing concepts',
      'DHCP',
      'Firewall rules',
      'Wi-Fi security',
      'VPN concepts',
      'Network segmentation',
      'Network security',
    ],
    diagram: {
      type: 'simple',
      trunk: ['Internet', 'Firewall', 'Managed Switch'],
      branch: ['Staff VLAN', 'Guest VLAN', 'CCTV VLAN'],
    },
    vlanPlan: [
      { vlan: 'VLAN 10', purpose: 'Staff', network: '192.168.10.0/24', description: 'Employee computers and authorized devices' },
      { vlan: 'VLAN 20', purpose: 'Guest', network: '192.168.20.0/24', description: 'Guest internet access' },
      { vlan: 'VLAN 30', purpose: 'CCTV', network: '192.168.30.0/24', description: 'Security cameras' },
    ],
    firewallPolicy: {
      allow: ['Staff → Internet', 'Guest → Internet', 'CCTV → Required services'],
      restrict: ['Guest → Staff', 'Guest → CCTV', 'CCTV → Staff'],
    },
    securityDesign: [
      'Network segmentation',
      'Least-privilege access',
      'Guest isolation',
      'CCTV isolation',
      'Firewall filtering',
      'Secure remote access',
    ],
    caseStudy: {
      problem:
        'An office needs to separate staff traffic, guest internet access, and CCTV cameras onto isolated networks so a compromised guest device or camera cannot reach sensitive staff systems.',
      architecture:
        'A firewall sits between the internet and a managed switch. The switch trunk carries three VLANs — Staff, Guest, and CCTV — each with its own subnet and DHCP scope, with firewall rules restricting inter-VLAN traffic to only what is necessary.',
      security:
        'Segmentation and least-privilege firewall rules keep Guest and CCTV traffic away from Staff resources. A VPN concept provides secure remote access into the internal network for authorized users, avoiding direct exposure of internal services to the internet.',
      testingApproach:
        'Testing focused on confirming each VLAN received correct DHCP addressing, verifying the firewall correctly blocked the restricted paths (Guest → Staff, Guest → CCTV, CCTV → Staff) while allowing the permitted ones, and validating Wi-Fi authentication on the Staff and Guest SSIDs separately.',
      lessonsLearned:
        'Deepened understanding of VLAN segmentation, inter-VLAN access control, and how firewall policy design directly supports a least-privilege security posture.',
      futureImprovements:
        'A management VLAN, centralized logging, and a dedicated hardware VPN appliance would strengthen this design further for a real deployment.',
    },
  },
  {
    id: 'company-network-proposal',
    category: 'Networking',
    number: '03',
    title: '25-User Company Network Proposal',
    label: 'Complete Network Infrastructure Proposal',
    objective:
      'A complete network infrastructure proposal for a 25-user company covering network architecture, IP addressing, VLAN design, equipment selection, Wi-Fi planning, security, installation, testing, cost estimation, and AMC support.',
    diagram: {
      type: 'company',
    },
    ipPlan: [
      { vlan: 'VLAN 10', purpose: 'Staff', network: '192.168.10.0/24', gateway: '192.168.10.1', dhcp: 'Yes' },
      { vlan: 'VLAN 20', purpose: 'Guest', network: '192.168.20.0/24', gateway: '192.168.20.1', dhcp: 'Yes' },
      { vlan: 'VLAN 30', purpose: 'CCTV', network: '192.168.30.0/24', gateway: '192.168.30.1', dhcp: 'Yes' },
      { vlan: 'VLAN 40', purpose: 'Management', network: '192.168.40.0/24', gateway: '192.168.40.1', dhcp: 'Limited' },
      { vlan: 'VLAN 50', purpose: 'Server/NAS', network: '192.168.50.0/24', gateway: '192.168.50.1', dhcp: 'Optional' },
    ],
    vlanPlan: [
      { vlan: 'VLAN 10', purpose: 'Staff', description: 'Employee PCs and laptops' },
      { vlan: 'VLAN 20', purpose: 'Guest', description: 'Guest internet access, isolated from internal resources' },
      { vlan: 'VLAN 30', purpose: 'CCTV', description: 'Security cameras, isolated from staff and guest' },
      { vlan: 'VLAN 40', purpose: 'Network Management', description: 'Switch/AP/firewall management interfaces' },
      { vlan: 'VLAN 50', purpose: 'Server/NAS', description: 'Internal file server / NAS storage' },
    ],
    equipment: [
      { category: 'ISP Modem / ONT', qty: 1 },
      { category: 'Business Firewall/Router', qty: 1 },
      { category: 'Managed Gigabit Switch', qty: 1 },
      { category: 'Wi-Fi Access Points', qty: 3 },
      { category: 'Cat6 Ethernet Cable (box)', qty: 2 },
      { category: 'Patch Panel', qty: 1 },
      { category: 'Network Rack', qty: 1 },
      { category: 'Patch Cords', qty: 30 },
      { category: 'Keystone Jacks', qty: 30 },
      { category: 'Cable Management', qty: 1 },
      { category: 'UPS', qty: 1 },
      { category: 'CCTV Equipment', qty: 1 },
      { category: 'Network Printer', qty: 1 },
      { category: 'NAS / Server (optional)', qty: 1 },
    ],
    wifiDesign: {
      ssids: ['Company-Staff', 'Company-Guest', 'Company-CCTV / IoT (where applicable)'],
      notes: [
        'Staff Wi-Fi should use secure authentication (WPA2-Enterprise or a strong WPA2/WPA3 passphrase).',
        'Guest Wi-Fi should be isolated from internal networks.',
        'Access points should be positioned based on coverage requirements.',
        'Channel planning should minimize interference between nearby APs.',
        'Wi-Fi should be tested for connectivity and roaming after installation.',
      ],
    },
    securityControls: [
      'Firewall',
      'VLAN segmentation',
      'Guest isolation',
      'Strong Wi-Fi authentication',
      'VPN',
      'Secure management access',
      'Firmware updates',
      'Endpoint security',
      'Password policy',
      'Network monitoring',
      'Logging',
      'Backup',
      'Least-privilege access',
    ],
    installationPlan: [
      'Site Survey',
      'Requirement Collection',
      'Network Design',
      'Equipment Procurement',
      'Cable Installation',
      'Rack & Patch Panel Installation',
      'Router/Firewall Configuration',
      'Switch Configuration',
      'VLAN Configuration',
      'Wi-Fi Deployment',
      'Device Connectivity',
      'Security Configuration',
      'Testing',
      'Documentation & Handover',
    ],
    testingChecklist: {
      Physical: ['Cable continuity', 'Connector inspection', 'Rack installation', 'Power/UPS testing'],
      Network: [
        'IP assignment',
        'DHCP testing',
        'Gateway testing',
        'DNS testing',
        'Internet connectivity',
        'VLAN connectivity',
        'Inter-VLAN restrictions',
        'Wi-Fi connectivity',
      ],
      Security: [
        'Firewall rules',
        'Guest isolation',
        'CCTV isolation',
        'VPN testing',
        'Admin password security',
        'Firmware updates',
        'Logging enabled',
      ],
      Performance: ['LAN speed test', 'Wi-Fi coverage test', 'Packet loss test', 'Latency test'],
      Documentation: [
        'Network diagram',
        'IP addressing document',
        'VLAN document',
        'Device inventory',
        'Configuration backup',
        'Client handover',
      ],
    },
    amcPackages: [
      {
        tier: 'Basic',
        items: ['Periodic inspection', 'Basic troubleshooting', 'Network health check'],
      },
      {
        tier: 'Standard',
        items: ['Everything in Basic', 'Configuration backup', 'Security review', 'Wi-Fi optimization'],
      },
      {
        tier: 'Premium',
        items: ['Everything in Standard', 'Priority support', 'Advanced monitoring', 'Preventive maintenance', 'Detailed reporting'],
      },
    ],
    amcServices: [
      'Network health checks',
      'Router/firewall troubleshooting',
      'Switch troubleshooting',
      'Wi-Fi troubleshooting',
      'Connectivity troubleshooting',
      'Configuration backup',
      'Basic security review',
      'Firmware update assistance',
      'Performance monitoring',
      'Incident response support',
      'Preventive maintenance',
    ],
    caseStudy: {
      problem:
        'A growing 25-user company needs a complete, from-scratch network infrastructure proposal — covering everything from IP addressing to ongoing maintenance — before any procurement or installation begins.',
      architecture:
        'Internet enters through an ISP modem into a business firewall, which feeds a core/managed switch. The switch trunks five VLANs (Staff, Guest, CCTV, Management, Server/NAS) out to access points, PCs/laptops, a network printer, CCTV cameras, and a NAS/server, with segmentation enforced at the firewall and switch.',
      security:
        'Defense is layered: perimeter firewall, VLAN segmentation with least-privilege inter-VLAN rules, strong Wi-Fi authentication per SSID, VPN for remote access, secure management access on its own VLAN, and baseline operational practices (firmware updates, logging, backups, password policy).',
      testingApproach:
        'A structured checklist spans physical installation, network configuration, security validation, and performance testing, finishing with a documentation and handover step so the client receives full network records.',
      lessonsLearned:
        'This proposal format mirrors how a real small-business network engagement is scoped: architecture and addressing first, then equipment and Wi-Fi planning, then security design, then a concrete installation timeline, budget, and testing plan — followed by ongoing AMC support.',
      futureImprovements:
        'A production version would incorporate an actual site survey, vendor quotations in place of placeholder costs, and a signed SLA defining response times for each AMC tier.',
    },
  },
]
